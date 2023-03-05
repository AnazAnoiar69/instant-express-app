const CompanyModel = require("../models/CompanyModel");
const mongoose = require("mongoose");

// get all company
const getAllCompany = async (req, res) => {
    const company = await CompanyModel.find({}).sort({name: 1})
    res.status(200).json(company)
}

// get single company
const getCompany = async (req, res) => {
    const { id } = await req.params
    !id && res.status(400).json({error: "No Data"})

    const company = await CompanyModel.findById(id).populate('contacts')
    res.status(200).json(company)
}

// create company
const createCompany = async (req,res) => {
  // get from body
  const company = ({ name, address, email, phone, contacts } = req.body);

  // add to db
  try {
    const newCompany = await CompanyModel.create(company);
    res.status(200).send(newCompany);
  } catch (error) {
    res.status(400).send({message: error});
  }
};

// delete company
const deleteCompany = async (req, res) => {
  const { id } = await req.params;

  try {
    const company = await CompanyModel.findByIdAndDelete({ _id: id });
    res.status(200).send(company);
  } catch (error) {
    !id && res.status(400).json({ error: "Cannot delete data" });
  }
};

// update company

module.exports = {
    getAllCompany,
    getCompany,
    createCompany,
    deleteCompany,
}