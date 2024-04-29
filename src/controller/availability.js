const { Availability } = require("../db/schema");

// Add availability
const addAvailablity = async (req, res) => {
  try {
    const { startTime, endTime, dayOfWeek } = req.body;
    const createdBy = req.user;

    const availability = new Availability({
      startTime,
      endTime,
      dayOfWeek,
      createdBy,
    });
    await availability.save();

    res.status(200).json({
      success: true,
      message: "Availability added successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Edit availability
const editAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const { startTime, endTime, dayOfWeek } = req.body;
    const createdBy = req.user;

    await Availability.findByIdAndUpdate(id, {
      startTime,
      endTime,
      dayOfWeek,
      createdBy,
    });
    res.status(200).json({
      success: true,
      message: "Availability updated successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete availability
const deleteAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    await Availability.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Availability deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get availability
const getAvailability = async (req, res) => {
  try {
    const createdBy = req.user;

    const availability = await Availability.find({ createdBy });
    res.status(200).json({ success: true, availability });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  addAvailablity,
  editAvailability,
  deleteAvailability,
  getAvailability,
};
