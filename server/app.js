const express = require("express");
const cors = require("cors");

const borrowbookRouter = require("./app/routes/borrowbook.route");

// const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/borrow", borrowbookRouter);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application" });
});

module.exports = app;
