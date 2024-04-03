const DocGiaService = require("../services/docgia.service");
const ApiError = require("../api_error");
const MongoDB = require("../utils/mongodb.util");
exports.register = async (req, res, next) => {
  if (!req.body?.tenDocGia) {
    return next(new ApiError(400, "Vui lòng điền Ten"));
  }
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.register(req.body);
    return res.send(document);
  } catch (error) {
    return next(new ApiError(error.message));
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const { tenDocGia } = req.query;
    if (tenDocGia) {
      documents = await docGiaService.findByName(tenDocGia);
    } else {
      documents = await docGiaService.find({});
    }
  } catch (error) {
    return next(new ApiError(500, "Co loi luc kiem doc gia"));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Khong tim thay doc gia"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(500, "loi o tim kiem doc gia theo id"));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Du lieu cap nhat khong duoc rong"));
  }
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.update(req.params.id, req.body);
    if (document === null) {
      return next(new ApiError(404, "Khong thay doc gia"));
    }
    return res.send({ message: "Doc gia cap nhat thanh cong" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.delete = async (req, res, next) => {
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.delete(req.params.id);
    if (document === null) {
      return next(new ApiError(404, "Không tìm thấy độc giả"));
    }
    return res.send({ message: "Đọc giả xóa thành công" });
  } catch (error) {
    return next(new ApiError(500, "Không thể xóa đọc giả "));
  }
};
exports.login = async (req, res, next) => {
  if (!req.body?.tenDocGia || !req.body?.password) {
    return next(new ApiError(400, "Vui lòng điền tên độc giả và mật khẩu"));
  }
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.login(req.body);
    if (!document) {
      return next(new ApiError(404, "Không tìm thấy độc giả"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.logout = async (req, res, next) => {
  try {
    const docGiaService = new DocGiaService(MongoDB.client);
    const document = await docGiaService.logout();
    return res.send(document);
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
