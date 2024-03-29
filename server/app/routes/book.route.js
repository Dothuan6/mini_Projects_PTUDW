const express = require("express");

const book = require("../controllers/book.controller");
const router = express.Router();
router.route("/").get(book.findAll).post(book.create);
router.route("/:id").get(book.findOne).put(book.update).delete(book.delete);
module.exports = router;
