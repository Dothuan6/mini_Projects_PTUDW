const MuonSachService = require("../services/muonsach.service");
const ApiError = require("../api_error");
const MongoDB = require("../utils/mongodb.util");
exports.register = async (req, res, next) => {
  try {
    const muonSachService = new MuonSachService(MongoDB.client);
    const document = await muonSachService.register(req.body);
    return res.send(document);
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const muonSachService = new MuonSachService(MongoDB.client);
    const { maDocGia } = req.query;
    if (maDocGia) {
      documents = await muonSachService.findByName(maDocGia);
    } else {
      documents = await muonSachService.find({});
    }
  } catch (error) {
    return next(new ApiError(500, "Co loi luc kiem muon sach"));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  try {
    const muonSachService = new MuonSachService(MongoDB.client);
    const document = await muonSachService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Khong tim thay muon sach"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(500, "loi o tim kiem muon sach theo id"));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Du lieu cap nhat khong duoc rong"));
  }
  try {
    const muonSachService = new MuonSachService(MongoDB.client);
    const document = await muonSachService.update(req.params.id, req.body);
    if (document === null) {
      return next(new ApiError(404, "Khong thay muon sach"));
    }
    return res.send({ message: "Muon sach cap nhat thanh cong" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.delete = async (req, res, next) => {
  try {
    const muonSachService = new MuonSachService(MongoDB.client);
    const document = await muonSachService.delete(req.params.id);
    if (document === null) {
      return next(new ApiError(404, "Khong thay muon sach"));
    }
    return res.send({ message: "Muon sach xoa thanh cong" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
