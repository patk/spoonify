const express = require("express");
const router = express.Router();
const { api_key } = require("../config");

router.get("/", (req, res) => {
  res.render("pages/explore", {
    title: "Explore | Spoonify",
    api_key: api_key,
  });
});

module.exports = router;
