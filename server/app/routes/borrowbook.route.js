const express = require("express");

const borrowbook = require("../controllers/borrowbook.controller");
const router = express.Router();
router.route("/").get(borrowbook.findAll).post(borrowbook.create);
router
  .route("/:id")
  .get(borrowbook.findOne)
  .put(borrowbook.update)
  .delete(borrowbook.delete);
module.exports = router;
