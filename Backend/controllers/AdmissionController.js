const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Config = require("../config/vars");
const { Mail } = require("../services/index");
const { Admission } = require("../models");
require("dotenv").config();
const moment = require("moment-timezone");

const {
  IsExists,
  Insert,
  Find,
  CompressImageAndUpload,
  FindAndUpdate,
  Delete,
  HandleSuccess,
  HandleError,
  HandleServerError,
  Aggregate,
  ValidateEmail,
  PasswordStrength,
  ValidateAlphanumeric,
  ValidateLength,
  ValidateMobile,
  GeneratePassword,
  IsExistsOne,
  FindOne,
} = require("./BaseController");

module.exports = {
  AddAdmission: async (req, res) => {
    try {
      const {
        name = "",
        date_of_birth = "",
        age = "",
        gender = "",
        location = "",
        blood_group = "",
        contact_number = "",
        email = "",
        // nationality = "",
        permanent_address = "",
        course_name = "",
        course_fee = "",
        course_duration = "",
        guardian_name = "",
        guardian_contact = "",
        academic_qualification = "",
      } = req.body;

      let validateError = null;

      if (!name || !contact_number || !email) {
        validateError = "All fields are required";
      }

      // Validate email format
      if (!validateError && !ValidateEmail(email)) {
        validateError = "Invalid email format.";
      }

      // Validate phone number format
      if (!validateError && !ValidateMobile(contact_number)) {
        validateError = "Invalid phone number format.";
      }

      if (validateError) return HandleError(res, validateError);

      // ✅ Duplicate check: same email + same course + same contact number
      const existingAdmission = await Admission.findOne({
        email: email,
        course_name: course_name,
        contact_number: contact_number,
      });

      if (existingAdmission) {
        return HandleError(
          res,
          "An admission with this email, contact number, and course already exists."
        );
      }

      console.log("REQ BODY:", req.body);
      // Insert the data on Db
      const inserted = await Insert({
        model: Admission,
        data: {
          name: name,
          date_of_birth: date_of_birth,
          age: age,
          gender: gender,
          location: location,
          blood_group: blood_group,
          contact_number: contact_number,
          email: email,
          // nationality: nationality,
          permanent_address: permanent_address,
          course_name: course_name,
          course_fee: course_fee,
          course_duration: course_duration,
          guardian_name: guardian_name,
          guardian_contact: guardian_contact,
          academic_qualification: academic_qualification,
        },
      });

      // console.log("inserted", inserted);
      if (inserted) {
        //send mail to admin with all the data
        const mailData = {
          name: inserted.name,
          date_of_birth: inserted.date_of_birth,
          age: inserted.age,
          gender: inserted.gender,
          district_or_city: inserted.location,
          blood_group: inserted.blood_group,
          contact_number: inserted.contact_number,
          email: inserted.email,
          // nationality: inserted.nationality,
          permanent_address: inserted.permanent_address,
          course_name: inserted.course_name,
          course_fee: inserted.course_fee,
          course_duration: inserted.course_duration,
          guardian_name: inserted.guardian_name,
          guardian_contact: inserted.guardian_contact,
          academic_qualification: inserted.academic_qualification,
        };

        //MAIL TO USER
        // send mail to admin with all the data
        let admin_mail = [
          process.env.ADMISSION_MAIL1,
          process.env.ADMISSION_MAIL2,
          process.env.ADMISSION_MAIL3,
          process.env.ADMISSION_MAIL4,
          process.env.ADMISSION_MAIL5,
        ];

        let key = "";
        if (key === "SAP") {
          admin_mail.push(process.env.ADMIN_MAIL4);
        }
        admin_mail = admin_mail.filter(Boolean);
        const mailSend = await Mail.sendFormData(
          admin_mail,
          mailData,
          "EME Admission Data",
          "Admission Form"
        );
        if (!mailSend) {
          return HandleError(res, "Failed to send admission data.");
        }
      } else {
        return HandleError(res, "Failed to Add admisssion data");
      }
      return HandleSuccess(res, inserted);
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  getAllAdmissionData: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 15;
      const skip = (page - 1) * limit;

      let start_date = req.query.start_date
        ? moment
            .tz(req.query.start_date, "Asia/Kolkata")
            .startOf("day")
            .utc()
            .toDate()
        : null;
      let end_date = req.query.end_date
        ? moment
            .tz(req.query.end_date, "Asia/Kolkata")
            .endOf("day")
            .utc()
            .toDate()
        : null;

      if (start_date && end_date && start_date > end_date) {
        const temp = start_date;
        start_date = end_date;
        end_date = temp;
      }

      let query = {};

      if (start_date && end_date) {
        query.createdAt = { $gte: start_date, $lte: end_date };
      } else if (start_date) {
        query.createdAt = { $gte: start_date };
      } else if (end_date) {
        query.createdAt = { $lte: end_date };
      }

      const allAdmissionData = await Admission.find(query)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean();

      // If no data is found
      if (!allAdmissionData || allAdmissionData.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No admission data found.",
        });
      }

      // Convert the dates to IST for each result in the response
      const dataWithISTDates = allAdmissionData.map((item) => {
        return {
          ...item,
          createdAt: moment(item.createdAt).tz("Asia/Kolkata").format(),
          updatedAt: moment(item.updatedAt).tz("Asia/Kolkata").format(),
        };
      });

      // count total number of records
      const totalAdmissions = await Admission.countDocuments(query);

      // Get last 24 hours data
      const last24HoursQuery = {
        createdAt: { $gte: moment().subtract(24, "hours").toDate() },
      };

      const count_last24HoursAdmissions = await Admission.countDocuments(
        last24HoursQuery
      );

      return res.status(200).json({
        success: true,
        data: dataWithISTDates,
        count_last24HoursRecord: count_last24HoursAdmissions,
        totalRecords: totalAdmissions,
      });
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },

  getStudentDetails: async (req, res) => {
    try {
      const { student_id } = req.params;
      if (!student_id) return HandleError(res, "Student ID is required.");

      const student = await FindOne({
        model: Admission,
        where: { _id: student_id },
      });

      if (!student) return HandleError(res, "Student not found.");
      return HandleSuccess(res, student);
    } catch (err) {
      return HandleServerError(res, req, err);
    }
  },
};
