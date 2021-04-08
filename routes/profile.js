const express = require("express");
const router = express.Router();
const db = require("../db/database.js");

router.get("/", (req, res) => {
  db.any("SELECT * FROM users WHERE user_id = 1;")
    .then((user) => {
      console.log(user);
      res.render("pages/profile", {
        title: "Profile",
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
