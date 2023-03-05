const express = require("express");
const { createAccount, getAccounts, getAccount } = require("../controllers/accountController");

const router = express.Router();

router.get("/", getAccounts);
router.get("/:id",getAccount);
router.post("/", createAccount);
router.delete("/:id", (req, res) => {
  res.send("DELETE");
});
router.patch("/:id", (req, res) => {
  res.send("PATCH");
});

module.exports = router;
