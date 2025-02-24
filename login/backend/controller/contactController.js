import Contact from "../model/contactModel.js";

// Create a new contact document
export const createContact = async (req, res) => {
  try {
    // Create new Contact from request body (assumed to be validated client-side)
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Retrieve all contact documents
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
