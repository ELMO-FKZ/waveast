require("dotenv").config();
const cors = require("cors"); /*I don't use it in this file*/
const express = require("express");
// const connectDB = require("./connectDB");
const compression = require('compression');

// Routes
// const authRoutes = require("./routes/authRoutes");
// const classRoutes = require("./routes/classRoutes")
// const studentRoutes = require("./routes/studentRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");
// const behaviourRoutes = require("./routes/behaviourRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors()); /*I don't use it in this file*/
app.use(express.urlencoded( {extended: true} ));

// middleware
app.use(express.json());

// Copression
app.use(compression());

// APIs
// app.use("/api", authRoutes) 
// app.use("/api", classRoutes)
// app.use("/api", studentRoutes)
// app.use("/api", attendanceRoutes)
// app.use("/api", behaviourRoutes) 

app.use("/", (req, res) => {
    res.json("Hello World!");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});