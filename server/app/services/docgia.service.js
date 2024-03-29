const { ObjectId } = require("mongodb");
class DocGiaService {
  constructor(client) {
    this.DocGia = client.db().collection("DocGia");
  }
  extractDocGiaData(payload) {
    const docgia = {
      maDocGia: payload.maDocGia,
      hoLot: payload.hoLot,
      tenDocGia: payload.tenDocGia,
      ngaySinh: payload.ngaySinh,
      gioiTinh: payload.gioiTinh,
      diaChi: payload.diaChi,
      dienThoai: payload.dienThoai,
    };
    Object.keys(docgia).forEach(
      (key) => docgia[key] === undefined && delete docgia[key]
    );
    return docgia;
  }
  async create(payload) {
    const docgia = this.extractDocGiaData(payload);
    const result = await this.DocGia.findOneAndUpdate(
      docgia,
      { $set: docgia },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return result.value;
  }
}
module.exports = DocGiaService;
