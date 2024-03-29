const NXBService = require("../services/nxb.service");
const ApiError = require("../api_error");
const MongoDB = require("../utils/mongodb.util");
exports.create = async (req, res, next) => {
  if (!req.body?.maNXB) {
    return next(new ApiError(400, "Vui lòng điền mã nha xuat ban"));
  }
  try {
    const nxbService = new NXBService(MongoDB.client);
    const document = await nxbService.create(req.body);
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
