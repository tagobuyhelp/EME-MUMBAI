// const DBMigration = require("./dbMigration");
const jwt = require("jsonwebtoken");
const Config = require("../config/vars");
const {
  UnauthorizedError,
  IsExists,
  IsExistsOne,
  FindAndUpdate,
  HandleServerError,
} = require("../controllers/BaseController");
const { User, Token } = require("../models");

module.exports = {
  VerifyToken: async (req, res, next) => {
    try {
      if (typeof req.headers.authorization !== "undefined") {
        const tokenData = req.headers.authorization.split(" ")[1].split("||");
        let token = tokenData[0];

        // console.log("token", token);

        jwt.verify(token, Config.secret, async (err, user) => {
          if (err) return UnauthorizedError(res);
          let isUserExists = await IsExistsOne({
            model: User,
            where: { _id: user.id },
          });
          if (!isUserExists) return UnauthorizedError(res);

          const isTokenExists = await IsExists({
            model: Token,
            where: { user: user.id, access_token: token },
          });
          if (!isTokenExists) return UnauthorizedError(res);
          isUserExists = { ...isUserExists };
          req.user = isUserExists;
          next();
        });
      } else return UnauthorizedError(res);
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  isAdmin: async (req, res, next) => {
    try {
      const account_type = req.user.account_type;

      if (account_type !== "admin") {
        // console.log("This is protected route for admin only");
        return UnauthorizedError(res);
      }

      next();
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  isCustomer: async (req, res, next) => {
    try {
      const account_type = req.user.account_type;
      if (!account_type !== "enquirer") {
        // console.log("This is protected route for enquirer");
        return UnauthorizedError(res);
      }

      next();
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },
};
