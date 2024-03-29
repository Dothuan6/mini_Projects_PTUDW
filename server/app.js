const express = require("express");
const cors = require("cors");

const borrowbookRouter = require("./app/routes/borrowbook.route");
const ApiError = require("./app/api_error");

// const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/borrow", borrowbookRouter);
app.use((req, res, next) => {
  return next(new ApiError(404, "Không tìm thấy đường dẫn"));
});
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application" });
});

module.exports = app;
