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

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const nhanVienService = new NhanVienService(MongoDB.client);
    const { hoTenNhanVien } = req.query;
    if (hoTenNhanVien) {
      documents = await nhanVienService.findByName(hoTenNhanVien);
    } else {
      documents = await nhanVienService.find({});
    }
  } catch (error) {
    return next(new ApiError(500, "Co loi luc tim kiem nhan vien"));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  try {
    const nhanVienService = new NhanVienService(MongoDB.client);
    const document = await nhanVienService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Khong tim thay nhan vien"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(500, "loi o tim kiem nhan theo id"));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Du lieu cap nhat khong duoc rong"));
  }
  try {
    const nhanVienService = new NhanVienService(MongoDB.client);
    const document = await nhanVienService.update(req.params.id, req.body);
    if (document === null) {
      return next(new ApiError(404, "Khong thay nhan vien"));
    }
    return res.send({ message: "Nhan vien cap nhat thanh cong" });
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
exports.delete = async (req, res, next) => {
  try {
    const nhanVienService = new NhanVienService(MongoDB.client);
    const document = await nhanVienService.delete(req.params.id);
    if (document === null) {
      return next(new ApiError(404, "Không tìm thấy nhan vien"));
    }
    return res.send({ message: "nhan vien xóa thành công" });
  } catch (error) {
    return next(new ApiError(500, "Không thể xóa nhan vien "));
  }
};
exports.login = async (req, res, next) => {
  if (!req.body?.hoTenNhanVien || !req.body?.password) {
    return next(new ApiError(400, "Vui lòng điền tên nhân viên và mật khẩu"));
  }
  try {
    const nhanVienService = new NhanVienService(MongoDB.client);
    const document = await nhanVienService.login(req.body);
    if (!document) {
      return next(new ApiError(404, "Không tìm thấy nhân viên"));
    }
    return res.send(document);
  } catch (error) {
    return next(new ApiError(error.message));
  }
};
