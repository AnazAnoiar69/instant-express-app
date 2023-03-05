const express = require("express");
const { createCompany, getAllCompany, getCompany, deleteCompany } = require("../controllers/companyController");

const router = express.Router();

router.get("/", getAllCompany);
router.get("/:id", getCompany);
router.post("/", createCompany);
router.delete("/:id", deleteCompany);
router.patch("/:id", (req, res) => {
  res.send("PATCH");
});

module.exports = router;
