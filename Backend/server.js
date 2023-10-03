//import express to invoke with the app
const express = require("express");

// import cors to disable the cors policy error
const cors = require("cors");

//import body-paser to convert json format data in to server objects
const bodyParser = require("body-parser");

//import mongoose
const mongoose = require("mongoose");

// Import csurf
const csrf = require("csurf"); 
//import cookie - Parser
const cookieParser = require('cookie-parser');

//import Routes
//ramona routes
const user = require("./Routes/userRoutes");
const fuel = require("./Routes/AddFuel");
const stock = require("./Routes/Stock");

//anodya routes
const TimetableRoutes = require("./Routes/TimetableRoutes");
const FuelReportRoutes = require("./Routes/FuelReportRoutes");

//Disni Routes
const EmpAttendace = require("./Routes/EmpAttendace");
const EmpLeaveForm = require("./Routes/EmpLeaveForm");
const EmpSalary = require("./Routes/EmpSalary");

//sandeepa Routes
const submittedAppointment = require("./Routes/sumbittedAppointments");

//invoke app
const app = express();

//declare the port to run the backend
const PORT = process.env.PORT || 5000;

//middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use cookie-parser middleware to handle cookies
app.use(cookieParser());

// Create a CSRF token middleware
const csrfProtection = csrf({ cookie: true });

// Add a middleware to set the CSRF token in a cookie

app.use(csrfProtection)

app.use((req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken()); // Set the CSRF token as a cookie
  next();
});


// Endpoint to get the CSRF token
app.get("/csrf-token", csrfProtection, (req, res) => {
  // The CSRF token is available via req.csrfToken() due to csrfProtection middleware
  const csrfToken = req.csrfToken();

  // Send the CSRF token as a response
  res.json({ csrfToken });
});

const dotenv = require("dotenv");
dotenv.config();

//use server to communicate with routes
//disni
app.use(EmpAttendace);
app.use(EmpLeaveForm);
app.use(EmpSalary);

//ramona
app.use("/user", user);
app.use(fuel);
app.use(stock);

//anodya
app.use(TimetableRoutes);
app.use(FuelReportRoutes);

//sandeepa
app.use(submittedAppointment);

//connect the app with mongo db with mongoose
mongoose
  .connect(process.env.DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`Backend App is running on ${PORT}`);
});
