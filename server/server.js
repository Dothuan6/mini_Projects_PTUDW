const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Kết nối cơ sở dữ liệu thành công!");

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server đang chạy trên cổng ${PORT}`);
    });
  } catch (error) {
    console.log("Kết nối thất bại!", error);
    process.exit();
  }
}
startServer();
