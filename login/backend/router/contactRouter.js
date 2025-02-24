import express from "express";
import { createContact, getContacts } from "../controller/contactController.js";

const router = express.Router();

// POST route to create a new contact
router.post("/contact", createContact);

// GET route to fetch all contacts
router.get("/contact", getContacts);

export default router;
