const NhanVienService = require("../services/nhanvien.service");
const ApiError = require("../api_error");
const MongoDB = require("../utils/mongodb.util");
exports.register = async (req, res, next) => {
  if (!req.body?.hoTenNhanVien) {
    return next(new ApiError(400, "Vui lòng điền Ten"));
  }
  try {
    const nhanVienService = new NhanVienService(MongoDB.client);
    const document = await nhanVienService.register(req.body);
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
