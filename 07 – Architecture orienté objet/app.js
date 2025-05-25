const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();

const app = express();

// MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion MongoDB OK"))
  .catch((err) => console.log(err));

// Config Express
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/orders", orderRoutes);

app.get("/", (req, res) => res.redirect("/orders/new"));

app.listen(3000, () => console.log("Serveur sur http://localhost:3000"));

SS;
