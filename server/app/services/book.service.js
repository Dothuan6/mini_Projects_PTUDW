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
  async find(filter) {
    const cursor = await this.Sach.find(filter);
    return await cursor.toArray();
  }
  async findByName(tenSach) {
    return await this.find({
      tenSach: { $regex: new RegExp(tenSach), $options: "i" },
    });
  }
  async findById(id) {
    return await this.Sach.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async update(id, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const update = this.extractBookData(payload);
    const result = await this.Sach.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }
  async delete(id) {
    const result = await this.Sach.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}

module.exports = BookService;
