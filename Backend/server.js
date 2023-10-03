
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

// Disable the "X-Powered-By" header - Disni (Vul-fix)
app.disable("x-powered-by");

// Use the helmet middleware to set security headers, including X-Content-Type-Options - Disni (Vul-fix)
app.use(helmet());


// Add CSP middleware before defining routes - Disni (Vul-fix)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors 'self'; " +
    "script-src 'self' https://cdnjs.cloudflare.com https://kit.fontawesome.com; " +
    "style-src 'self' https://cdnjs.cloudflare.com;"
  );
  next();
});

// Add the X-Frame-Options middleware - Disni (Vul-fix)
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  next();
});

// Add Strict-Transport-Security middleware - Disni (Vul-fix)
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});

// Add X-Content-Type-Options middleware - Disni (Vul-fix)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

//declare the port to run the backend
const PORT = process.env.PORT || 5000;

// Middleware configurations for cross domain misconfiguration
const corsOptions = {
  origin: "http://localhost:1234", // Allow requests from this origin
};

app.use(cors(corsOptions));


app.use(
  cors({
    origin:["http://localhost:1234", "http://localhost:5000"], // Allow requests from your development origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Define the allowed HTTP methods
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
)

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

  // Send the CSRF token as a response as json
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
