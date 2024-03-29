const { ObjectId } = require("mongodb");
class NhanVienService {
  constructor(client) {
    this.NhanVien = client.db().collection("NhanVien");
  }
  extractNhanVienData(payload) {
    const nhanVien = {
      maNhanVien: payload.maNhanVien,
      hoTenNhanVien: payload.hoTenNhanVien,
      password: payload.password,
      chucVu: payload.chucVu,
      diaChi: payload.diaChi,
      dienThoai: payload.dienThoai,
    };
    Object.keys(nhanVien).forEach(
      (key) => nhanVien[key] === undefined && delete nhanVien[key]
    );
    return nhanVien;
  }
  async register(payload) {
    const nhanVien = this.extractNhanVienData(payload);
    const result = await this.NhanVien.findOneAndUpdate(
      nhanVien,
      { $set: nhanVien },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return result.value;
  }
}
module.exports = NhanVienService;
