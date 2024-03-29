const { ObjectId } = require("mongodb");
class NXBService {
  constructor(client) {
    this.NhaXuatBan = client.db().collection("NhaXuatBan");
  }
  extractNXBData(payload) {
    const nxb = {
      maNXB: payload.maNXB,
      tenNXB: payload.tenNXB,
      diaChi: payload.diaChi,
    };
    Object.keys(nxb).forEach(
      (key) => nxb[key] === undefined && delete nxb[key]
    );
    return nxb;
  }
  async create(payload) {
    const nxb = this.extractNXBData(payload);
    const result = await this.NhaXuatBan.findOneAndUpdate(
      nxb,
      { $set: nxb },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return result.value;
  }
}
module.exports = NXBService;
