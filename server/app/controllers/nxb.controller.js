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

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const nxbService = new NXBService(MongoDB.client);
    const { tenNXB } = req.query;
    if (tenNXB) {
      documents = await nxbService.findByName(tenNXB);
    } else {
      documents = await nxbService.find({});
    }
  } catch (error) {
    return next(new ApiError(500, "Co loi luc kiem nha xuat ban"));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  try {
    const nxbService = new NXBService(MongoDB.client);
    const document = await nxbService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Khong tim thay nha xuat ban"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(500, "loi o tim kiem nha xuat ban theo id"));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Du lieu cap nhat khong duoc rong"));
  }
  try {
    const nxbService = new NXBService(MongoDB.client);
    const document = await nxbService.update(req.params.id, req.body);
    if (document === null) {
      return next(new ApiError(404, "Khong thay nha xuat ban"));
    }
    return res.send({ message: "Nha xuat ban cap nhat thanh cong" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.delete = async (req, res, next) => {
  try {
    const nxbService = new NXBService(MongoDB.client);
    const document = await nxbService.delete(req.params.id);
    if (document === null) {
      return next(new ApiError(404, "Khong thay nha xuat ban"));
    }
    return res.send({ message: "Nha xuat ban da xoa" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
