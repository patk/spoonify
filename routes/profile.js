const express = require("express");
const router = express.Router();
const db = require("../db/database.js");

router.get("/", (req, res) => {
  db.any("SELECT * FROM users WHERE user_id = 1;")
    .then((user) => {
      db.any("SELECT * FROM diary WHERE user_id = 1")
        .then((diary) => {
          /*console.log("USER:");
          console.log(user);
          console.log("DIARY:");*/
          console.log(diary);

          res.render("pages/profile", {
            title: "Profile",
            user: user,
            diary: diary,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
