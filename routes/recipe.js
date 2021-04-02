const { response } = require("express");
const express = require("express");
const router = express.Router();
const { api_key } = require("../config");

router.get("/", (req, res) => {
  res.render("pages/recipe");
});

router.get("/:id", (req, res) => {
  console.log("RECIPE ID (BACKEND): " + req.params.id);
  res.render("pages/recipe", {
    title: "Recipe | Spoonify",
    api_key: api_key,
    recipe_id: req.params.id,
  });
});

module.exports = router;
