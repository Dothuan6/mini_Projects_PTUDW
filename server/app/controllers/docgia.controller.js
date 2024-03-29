const DocGiaService = require("../services/docgia.service");
const ApiError = require("../api_error");
const MongoDB = require("../utils/mongodb.util");
exports.create = async (req, res, next) => {
  if (!req.body?.tenDocGia) {
    return next(new ApiError(400, "Vui lòng điền Ten"));
  }
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.create(req.body);
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
