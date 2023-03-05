//MAIN IMPORT
require("dotenv").config();
const express = require("express");
const { mongoose } = require("mongoose");
const cors = require('cors');



//MIDDLEWARE//

//IMPORT MIDDLEWARE
const accounts = require("./accounts.json");
const home = { home: "HOME" };
const app = express();
const accountsRoutes = require('./routes/accounts')
const companyRoutes = require('./routes/allCompany')
const contactRoutes = require('./routes/contacts')

// Add CORS
app.use(cors())

///TO-JSON
app.use(express.json());

//ROUTES
app.use('/api/accounts', accountsRoutes)
app.use('/api/company', companyRoutes)
app.use('/api/contacts', contactRoutes)

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
  })




///CONNECT MONGODB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("Connected");
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));

      // GET //
      app.get("/", (req, res) => {
        console.log(req.url);
        res.send(home);
      });
  
      app.get("/accounts", (req, res) => {
        res.send(accounts);
  
        console.log(req);
      });
  
      app.get("/accounts/:id", (req, res) => {
        const { id } = req.params;
  
        const getAccount = accounts.filter((account) => {
          account.id == id && res.send(account);
        });
      });
  
      // POST //
  
      app.post("/accounts/", (req, res) => {
        //   const { id } = req.params;
        const { id, accountName, totalUnit, accountVIP } = req.body;
  
        res.send({ id, accountName, totalUnit, accountVIP });
      });
