const { ObjectId } = require("mongodb");
class BookService {
  constructor(client) {
    this.Sach = client.db().collection("Sach");
  }
  extractBookData(payload) {
    const sach = {
      maSach: payload.maSach,
      tenSach: payload.tenSach,
      donGia: payload.donGia,
      soQuyen: payload.soQuyen,
      namXuatBan: payload.namXuatBan,
      maNXB: payload.maNXB,
      tacGia: payload.tacGia,
    };
    Object.keys(sach).forEach(
      (key) => sach[key] === undefined && delete sach[key]
    );
    return sach;
  }
  async create(payload) {
    const sach = this.extractBookData(payload);
    const result = await this.Sach.findOneAndUpdate(
      sach,
      { $set: sach },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return result.value;
  }
}
module.exports = BookService;
