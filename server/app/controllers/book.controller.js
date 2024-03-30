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

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const bookService = new BookService(MongoDB.client);
    const { tenSach } = req.query;
    if (tenSach) {
      documents = await bookService.findByName(tenSach);
    } else {
      documents = await bookService.find({});
    }
  } catch (error) {
    return next(new ApiError(500, "Co loi luc kiem book"));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  try {
    const bookService = new BookService(MongoDB.client);
    const document = await bookService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Khong tim thay sach"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(500, "loi o tim kiem sach theo id"));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Du lieu cap nhat khong duoc rong"));
  }
  try {
    const bookService = new BookService(MongoDB.client);
    const document = await bookService.update(req.params.id, req.body);
    if (document === null) {
      return next(new ApiError(404, "Khong thay sach"));
    }
    return res.send({ message: "Sach Cap nhat thanh cong" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.delete = async (req, res, next) => {
  try {
    const bookService = new BookService(MongoDB.client);
    const document = await bookService.delete(req.params.id);
    if (document === null) {
      return next(new ApiError(404, "Không tìm thấy sách"));
    }
    return res.send({ message: "Sách xóa thành công" });
  } catch (error) {
    return next(new ApiError(500, "Không thể xóa sách "));
  }
};
