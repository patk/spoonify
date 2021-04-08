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

router.post("/food", (req, res) => {
  const food_title = req.body.foodTitle;
  const food_date = req.body.foodDate;
  const food_meal = req.body.foodMeal;
  const food_calories = req.body.foodCalories;

  db.none(
    "INSERT INTO diary(user_id, diary_date, meal, food_title, calories) VALUES ($1, $2, $3, $4, $5);",
    [1, food_date, food_meal, food_title, food_calories]
  )
    .then(() => {
      res.redirect("/profile");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
