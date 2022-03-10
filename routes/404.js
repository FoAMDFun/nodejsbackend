const path = require("path");

const express = require("express");

const rootDir = require("../helpers/path");

const router = express.Router();

router.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views/404.html"));
});
module.exports = router;
