import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    phone: { type: String },
    email: { type: String,  trim: true },
    message: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
