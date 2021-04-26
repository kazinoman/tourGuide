// Dependencies
// ============================================================================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
// const tourRoute = require('./routes/api/tourRoute');

// Sets up the Express App
// ============================================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
// ============================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serves up static assets
// ============================================================================
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Adds the Routes to the app
// ============================================================================
app.use(routes);
app.use(routes);

// Connect to the MongoDB
// ============================================================================
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Tour",{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Starts the Express app
// ============================================================================
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
