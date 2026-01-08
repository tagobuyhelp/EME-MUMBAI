const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const mongoose = require("mongoose");
const Config = require("../config/vars");
const { Mail } = require("../services/index");
const { Admission, Enquiry } = require("../models");
require("dotenv").config();

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
  getAllDashboardData: async (req, res) => {
    try {
      const startOfMonth = moment().startOf("month").toDate();
      const endOfMonth = moment().endOf("month").toDate();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const now = moment().toDate();
      const last24Hours = moment().subtract(24, "hours").toDate();
      const startOfYear = moment().startOf("year").toDate();
      const endOfYear = moment().endOf("year").toDate();

      const totalAdmissions = await Admission.countDocuments();
      const totalEnquiries = await Enquiry.countDocuments();

      const last24HoursAdmissions = await Admission.countDocuments({
        createdAt: { $gte: last24Hours, $lte: now },
      });

      const last24HoursEnquiries = await Enquiry.countDocuments({
        createdAt: { $gte: last24Hours, $lte: now },
      });

      // admission data count on yearly basis
      const yearlyAdmissions = await Admission.aggregate([
        {
          $group: {
            _id: {
              year: { $year: "$createdAt" },
              month: { $month: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } },
      ]);

      const admissionsByYear = yearlyAdmissions.reduce((acc, data) => {
        const year = data._id.year;
        const month = monthNames[data._id.month - 1];
        if (!acc[year]) acc[year] = { total: 0, monthly: [] };
        acc[year].monthly.push({ month, count: data.count });
        acc[year].total += data.count;
        return acc;
      }, {});

      // Enquiry data count on yearly basis
      const yearlyEnquiries = await Enquiry.aggregate([
        {
          $group: {
            _id: {
              year: { $year: "$createdAt" },
              month: { $month: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } },
      ]);

      const enquiriesByYear = yearlyEnquiries.reduce((acc, data) => {
        const year = data._id.year;
        const month = monthNames[data._id.month - 1];
        if (!acc[year]) acc[year] = { total: 0, monthly: [] };
        acc[year].monthly.push({ month, count: data.count });
        acc[year].total += data.count;
        return acc;
      }, {});

      // Get the data for the current month
      // Aggregating Admissions by Day
      const admissions = await Admission.aggregate([
        {
          $match: {
            createdAt: { $gte: startOfMonth, $lte: endOfMonth },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            count: { $sum: 1 },
          },
        },
      ]);

      // Aggregating Enquiries by Day
      const enquiries = await Enquiry.aggregate([
        {
          $match: {
            createdAt: { $gte: startOfMonth, $lte: endOfMonth },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            count: { $sum: 1 },
          },
        },
      ]);

      // Prepare data as an object for quick lookup
      const admissionsData = admissions.reduce((acc, item) => {
        acc[item._id] = item.count;
        return acc;
      }, {});

      const enquiriesData = enquiries.reduce((acc, item) => {
        acc[item._id] = item.count;
        return acc;
      }, {});

      // Generate chartData for each day of the current month
      const daysInMonth = moment().daysInMonth();
      const chartData2 = [];

      for (let day = 1; day <= daysInMonth; day++) {
        const date = moment()
          .startOf("month")
          .add(day - 1, "days")
          .format("YYYY-MM-DD");
        chartData2.push({
          date,
          enquiries: enquiriesData[date] || 0,
          admissions: admissionsData[date] || 0,
        });
      }

      const dashboardData = {
        totalAdmissions,
        totalEnquiries,
        last24HoursAdmissions,
        last24HoursEnquiries,
        admissionsByYear,
        enquiriesByYear,
        chartData2,
      };

      return HandleSuccess(res, dashboardData);
    } catch (error) {
      return HandleServerError(res, req, error);
    }
  },
};
