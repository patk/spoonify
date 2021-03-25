const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/discover", {
    title: "Discover",
  });
});

module.exports = router;
