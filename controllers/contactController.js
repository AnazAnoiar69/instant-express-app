const ContactModel = require("../models/ContactModel");
const mongoose = require("mongoose");

// get all contacts
const getContacts = async (req, res) => {
  const contacts = await ContactModel.find({}).sort({ name: 1 });
  res.status(200).json(contacts);
};

// get single contact
const getContact = async (req, res) => {
  const { id } = await req.params;
  !id && res.status(400).json({ error: "No Data" });

  const contact = await ContactModel.findById(id);
  res.status(200).json(contact);
};

// create contact
const createContact = async (req, res) => {
  // get from body
  const contact = ({ title, name, company, phone, email } = req.body);

  // add to db
  try {
    const newContact = await ContactModel.create(contact);
    res.status(200).send(newContact);
  } catch (error) {
    res.status(400).send.json({ message: error });
  }
};

// delete contact
const deleteContact = async (req, res) => {
  const { id } = await req.params;

  try {
    const contact = await ContactModel.findByIdAndDelete({ _id: id });
    res.status(200).send(contact);
  } catch (error) {
    !id && res.status(400).json({ error: "Cannot delete data" });
  }
};

// update contact
const updateContact = async (req, res) => {
  const { id } = req.params
  const body = req.body

  try {
    const contact = await ContactModel.findByIdAndUpdate(id, body);
    res.status(200).send(contact)
  } catch (error) {
    !id && res.status(400).send({ error: "Cannot edit data" });
  }
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact
};
