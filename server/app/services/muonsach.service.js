const { ObjectId } = require("mongodb");
class MuonSachService {
  constructor(client) {
    this.MuonSach = client.db().collection("TheoDoiMuonSach");
  }
  extractMuonSachData(payload) {
    const muonsach = {
      maDocGia: payload.maDocGia,
      tenDocGia: payload.tenDocGia,
      maSach: payload.maSach,
      tenSach: payload.tenSach,
      ngayMuon: payload.ngayMuon,
      ngayTra: payload.ngayTra,
      trangThai: payload.trangThai,
    };
    Object.keys(muonsach).forEach(
      (key) => muonsach[key] === undefined && delete muonsach[key]
    );
    return muonsach;
  }
  async register(payload) {
    const muonsach = this.extractMuonSachData(payload);
    const result = await this.MuonSach.findOneAndUpdate(
      muonsach,
      { $set: muonsach },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return result.value;
  }
  async find(filter) {
    const cursor = await this.MuonSach.find(filter);
    return await cursor.toArray();
  }
  async findByName(tenDocGia) {
    return await this.find({
      tenDocGia: { $regex: new RegExp(tenDocGia), $options: "i" },
    });
  }
  async findById(id) {
    return await this.MuonSach.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async update(id, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const update = this.extractMuonSachData(payload);
    const result = await this.MuonSach.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }
  async delete(id) {
    const result = await this.MuonSach.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}
module.exports = MuonSachService;
