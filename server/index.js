require("dotenv").config();
const express = require("express");
// const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

// Routes
const newsletterRoutes = require("./routes/newsletterRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use(express.urlencoded({extended: true})); // here he made false
app.use(express.json());
// app.use(cors({origin: 'http://', credentials: true}));
app.use(cors({origin: 'http://localhost:5173', credentials: true})); 

// APIs
app.use("/api", newsletterRoutes);
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});


// server: mail.waveast.pl
// incoming port: 143
// outgoing port : 587

// Gmail
// klem heiy honv recm