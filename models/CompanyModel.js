const mongoose = require("mongoose");
const { contactSchema } = require("./ContactModel");

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    contacts: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ContactModel",
      },
    ],
  },
  { timestamps: true }
);

const CompanyModel = mongoose.model("CompanyModel", companySchema);

module.exports = CompanyModel;
