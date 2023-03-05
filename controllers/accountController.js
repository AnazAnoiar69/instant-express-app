const AccountModel = require("../models/AccountsModel");
const mongoose = require("mongoose");

// get all accounts
const getAccounts = async (req, res) => {
    const accounts = await AccountModel.find({}).sort({name: 1})
    res.status(200).json(accounts)
}

// get single account
const getAccount = async (req, res) => {
    const { id } = await req.params
    !id && res.status(400).json({error: "No Data"})

    const account = await AccountModel.findById(id)
    res.status(200).json(account)
}

// create account
const createAccount = async (req,res) => {
  // get from body
  const { name, region, units } = req.body;

  // add to db
  try {
    const newAccount = await AccountModel.create({
      name,
      region,
      units,
    });
    res.status(200).send(newAccount);
  } catch (error) {
    res.status(400).send.json({ message: error });
  }
};

// delete account

// update account

module.exports = {
    getAccounts,
    getAccount,
    createAccount,
}