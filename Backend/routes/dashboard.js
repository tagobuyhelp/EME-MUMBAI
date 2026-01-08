const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const Dashboard = Controllers.Dashboard;
const Middleware = require("../middlewares");
const Auth = Middleware.Auth;
const VerifyToken = Auth.VerifyToken;
const isAdmin = Auth.isAdmin;


router.get("/get_all_dashboard_data",VerifyToken,isAdmin, Dashboard.getAllDashboardData);

//....without auth...
// router.get(
//   "/get_all_dashboard_data",
//   Dashboard.getAllDashboardData
// );


module.exports = router;
