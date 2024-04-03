const { ObjectId } = require("mongodb");
class DocGiaService {
  constructor(client) {
    this.DocGia = client.db().collection("DocGia");
  }
  extractDocGiaData(payload) {
    const docgia = {
      maDocGia: payload.maDocGia,
      password: payload.password,
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
  async register(payload) {
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
  async find(filter) {
    const cursor = await this.DocGia.find(filter);
    return await cursor.toArray();
  }
  async findByName(tenDocGia) {
    return await this.find({
      tenDocGia: { $regex: new RegExp(tenDocGia), $options: "i" },
    });
  }
  async findById(id) {
    return await this.DocGia.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async update(id, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const update = this.extractDocGiaData(payload);
    const result = await this.DocGia.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }
  async delete(id) {
    const result = await this.DocGia.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
  async login(payload) {
    const filter = {
      tenDocGia: payload.tenDocGia,
      password: payload.password,
    };
    return await this.DocGia.findOne(filter);
  }
}
module.exports = DocGiaService;
