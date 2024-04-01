const express = require("express");
const docgia = require("../controllers/docgia.controller");
const router = express.Router();
router.route("/").get(docgia.findAll).post(docgia.create);
router.route("/login").post(docgia.login);
router.route("/logout").get(docgia.logout);
router
  .route("/:id")
  .get(docgia.findOne)
  .put(docgia.update)
  .delete(docgia.delete);
module.exports = router;
