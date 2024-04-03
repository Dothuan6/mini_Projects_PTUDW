const express = require("express");
const cors = require("cors");

const bookRouter = require("./app/routes/book.route");
const ApiError = require("./app/api_error");
const nxbRouter = require("./app/routes/nxb.route");
const docgiaRouter = require("./app/routes/docgia.route");
const nhanvienRouter = require("./app/routes/nhanvien.route");
const muonsachRouter = require("./app/routes/muonsach.route");
// const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/book", bookRouter);
app.use("/api/nxb", nxbRouter);
app.use("/api/docgia", docgiaRouter);
app.use("/api/nhanvien", nhanvienRouter);
app.use("/api/muonsach", muonsachRouter);

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
