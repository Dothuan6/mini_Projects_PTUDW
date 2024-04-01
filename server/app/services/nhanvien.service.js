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
  async find(filter) {
    const cursor = await this.NhanVien.find(filter);
    return await cursor.toArray();
  }
  async findByName(hoTenNhanVien) {
    return await this.find({
      hoTenNhanVien: { $regex: new RegExp(hoTenNhanVien), $options: "i" },
    });
  }
  async findById(id) {
    return await this.NhanVien.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async update(id, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const update = this.extractNhanVienData(payload);
    const result = await this.NhanVien.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }
  async delete(id) {
    const result = await this.NhanVien.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
  async login(payload) {
    const filter = {
      hoTenNhanVien: payload.hoTenNhanVien,
      password: payload.password,
    };
    return await this.NhanVien.findOne(filter);
  }
}
module.exports = NhanVienService;
