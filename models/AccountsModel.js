const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  }
},{timestamps: true});
    
const AccountModel = mongoose.model("AccountModel", accountSchema);

module.exports = AccountModel;
