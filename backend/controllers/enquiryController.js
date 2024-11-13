
const Enquiry = require('../model/Enquiry');

const createEnquiry = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newEnquiry = new Enquiry({ name, email, phone, subject, message });
    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully!" });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ error: "Failed to submit enquiry" });
  }
};

module.exports = { createEnquiry };