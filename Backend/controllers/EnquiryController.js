const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const mongoose = require("mongoose");
const Config = require("../config/vars");
const { Mail } = require("../services");
const { Enquiry } = require("../models");

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
  AddEnquiry: async (req, res) => {
    try {
      const {
        name = "",
        email = "",
        phone_number = "",
        course = "",
        timing = "",
        email_sender = "",
        // ✅ UTM fields
        utm_source = null,
        utm_medium = null,
        utm_campaign = null,
        utm_term = null,
        utm_content = null,
        page_url = "", // ✅ landing page URL
      } = req.body;

      console.log("Course", course, email_sender);

      let validateError = null;

      if (!name || !email || !phone_number || !course) {
        validateError = "All fields are required.";
      }
      if (!validateError && !ValidateEmail(email)) {
        validateError = "Invalid email format.";
      }
      if (!validateError && !ValidateMobile(phone_number)) {
        validateError = "Invalid phone number format.";
      }

      // ✅ Decide source: if any UTM present -> use utm_source (or "utm"),
      // else if page_url present -> "organic", else blank
      const hasAnyUtm = [
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
      ].some(Boolean);
      const finalSource = hasAnyUtm
        ? utm_source || "utm"
        : page_url
        ? "organic"
        : "";

      if (validateError) return HandleError(res, validateError);

      // ✅ Insert in DB
      const inserted = await Insert({
        model: Enquiry,
        data: {
          name,
          email,
          phone_number,
          course,
           timing,
          utm_source,
          utm_medium,
          utm_campaign,
          utm_term,
          utm_content,
          source: finalSource,
          // Only store explicit page_url sent by client; no fallbacks
          page_url: page_url || "",
        },
      });

      if (inserted) {
        const mailData = {
          name: inserted.name,
          email,
          phone_number,
          course,
          timing,
          source: inserted.source,
        };

        // New routing logic:
        // - ADMIN_MAIL1 and ADMIN_MAIL4 always receive
        // - If source is organic -> also send to ADMIN_MAIL3
        // - If source is non-organic UTM (e.g., fb, googleads) -> also send to ADMIN_MAIL2
        let admin_mail = [process.env.ADMIN_MAIL1, process.env.ADMIN_MAIL4];
        const isOrganic = (inserted.source || "").toLowerCase() === "organic";
        const isNonOrganicUtm =
          !isOrganic &&
          !!(
            utm_source ||
            utm_medium ||
            utm_campaign ||
            utm_term ||
            utm_content
          );
        if (isOrganic) {
          admin_mail.push(process.env.ADMIN_MAIL3);
        } else if (isNonOrganicUtm) {
          admin_mail.push(process.env.ADMIN_MAIL2);
        }
        admin_mail = admin_mail.filter(Boolean);

        const mailSend = await Mail.sendFormData(
          admin_mail,  
          // admin_mail.join(","),     
          // process.env.ADMIN_MAIL1,
          mailData,
          `EME Enquiry Form from ${course} Course`,
          "Enquiry Form"
        );
        if (!mailSend) {
          return HandleError(res, "Failed to send Enquiry data.");
        }
        console.log("Test :: ", mailSend, mailData)
      } else {
        return HandleError(res, "Failed to add enquiry data.");
      }
      return HandleSuccess(res, inserted);
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  getAllEnquiryData: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 100;
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

      const allEnquiryData = await Enquiry.find(query)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean();

      if (!allEnquiryData || allEnquiryData.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No enquiry data found.",
        });
      }

      const totalRecords = await Enquiry.countDocuments(query);

      const dataWithISTDates = allEnquiryData.map((item) => {
        // ✅ Build URL with UTMs only if we have a stored base URL
        const baseUrl = item.page_url || "";
        let url = baseUrl;
        if (baseUrl) {
          const params = [];
          if (item.utm_source) params.push(`utm_source=${item.utm_source}`);
          if (item.utm_medium) params.push(`utm_medium=${item.utm_medium}`);
          if (item.utm_campaign)
            params.push(`utm_campaign=${item.utm_campaign}`);
          if (item.utm_term) params.push(`utm_term=${item.utm_term}`);
          if (item.utm_content) params.push(`utm_content=${item.utm_content}`);
          if (params.length > 0) {
            url += (url.includes("?") ? "&" : "?") + params.join("&");
          }
        }

        const derivedSource = item.source || (item.page_url ? "organic" : "");
        return {
          _id: item._id,
          name: item.name,
          email: item.email,
          phone_number: item.phone_number,
          course: item.course,
          timing: item.timing || null,
          source: derivedSource,
          url: url,
          createdAt: moment(item.createdAt).tz("Asia/Kolkata").format(),
          updatedAt: moment(item.updatedAt).tz("Asia/Kolkata").format(),
          __v: item.__v,
        };
      });

      const countLast24Hours = await Enquiry.countDocuments({
        createdAt: { $gte: moment().subtract(24, "hours").toDate() },
      });

      return res.status(200).json({
        success: true,
        data: dataWithISTDates,
        last24HoursRecordCount: countLast24Hours,
        totalRecords,
      });
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },
};
