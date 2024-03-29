const ApiError = require("../api_error");
const MongoDB = require("../utils/mongodb.util");
const BookService = require("../services/book.service");
exports.create = async (req, res, next) => {
  if (!req.body?.maSach) {
    return next(new ApiError(400, "Vui lòng điền mã sách"));
  }
  try {
    const bookService = new BookService(MongoDB.client);
    const document = await bookService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(new ApiError(error.message));
  }
};

exports.findAll = (req, res) => {
  res.send({ message: "find all handler" });
};
exports.findOne = (req, res) => {
  res.send({ message: "find one handler" });
};
exports.update = (req, res) => {
  res.send({ message: "update handler" });
};
exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};
