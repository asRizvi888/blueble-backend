require("dotenv").config();

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { email } = jwt.verify(token, JWT_SECRET);
      req.user = email;
    } catch (err) {
      res.status(401).json({ success: false, message: "token expired" });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Authorization required",
    });
  }
  next();
};

module.exports = { requireSignin };
