const express = require("express");
const {
  addAvailablity,
  getAvailability,
  deleteAvailability,
  editAvailability,
} = require("../controller/availability");
const { requireSignin } = require("../middleware/authorization");

const router = express.Router();

router.get("/get", requireSignin, getAvailability);
router.post("/add", requireSignin, addAvailablity);
router.put("/edit:id", requireSignin, editAvailability);
router.delete("/delete:id", requireSignin, deleteAvailability);

module.exports = router;
