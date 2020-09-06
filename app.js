const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const contactRoute = require("./routes/contactsRoute");

mongoose
  .connect("mongodb://localhost/contactBook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Conected to mongoDB"))
  .catch((err) => console.log("no conection to mongo db", err));

app.use(express.json());
app.use('/contacts', contactRoute);

app.listen(port, console.log("Server is running on port " + port));