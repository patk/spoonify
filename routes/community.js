const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/community", {
    title: "Community",
  });
});

module.exports = router;
