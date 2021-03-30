console.log("hello from explore");
console.log("API KEY FROM FRONT END IS: " + `${api_key}`);

$("#explore-link").toggleClass("active");

const cuisines = [
  "chinese",
  "japanese",
  "korean",
  "vietnamese",
  "thai",
  "indian",
  "british",
  "irish",
  "french",
  "italian",
  "mexican",
  "spanish",
  "middle eastern",
  "american",
  "greek",
  "german",
  "caribbean",
];

let cuisine_index = Math.floor(Math.random() * cuisines.length);

const food_video_settings = {
  async: true,
  crossDomain: true,
  url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?cuisine=${cuisines[cuisine_index]}`,
  method: "GET",
  headers: {
    "x-rapidapi-key": `${api_key}`,
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

$.ajax(food_video_settings).done(function (response) {
  console.log(response);
  console.log("RESPONSE LENGTH: " + response.videos.length);

  let video_index = Math.floor(Math.random() * response.videos.length);
  let videoUrl = `https://www.youtube.com/embed/${response.videos[video_index].youTubeId}`;

  $(".hero-video").attr("src", videoUrl);
});

function set_meal_plan(url) {
  const meal_plan_settings = {
    async: true,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      "x-rapidapi-key": `${api_key}`,
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  $.ajax(meal_plan_settings).done(function (response) {
    console.log(response);

    let breakfast = response.meals[0];
    let lunch = response.meals[1];
    let dinner = response.meals[2];

    $("#meal-plan-breakfast").text(breakfast.title);
    $("#meal-plan-lunch").text(lunch.title);
    $("#meal-plan-dinner").text(dinner.title);

    $("#breakfast-img").attr(
      "src",
      `https://spoonacular.com/recipeImages/${breakfast.id}-556x370.${breakfast.imageType}`
    );
    $("#lunch-img").attr(
      "src",
      `https://spoonacular.com/recipeImages/${lunch.id}-556x370.${lunch.imageType}`
    );
    $("#dinner-img").attr(
      "src",
      `https://spoonacular.com/recipeImages/${dinner.id}-556x370.${dinner.imageType}`
    );

    $("#meal-plan-calories").html(response.nutrients.calories + " Cal");
    $("#meal-plan-protein").html(response.nutrients.protein + " g");
    $("#meal-plan-fat").html(response.nutrients.fat + " g");
    $("#meal-plan-carbs").html(response.nutrients.carbohydrates + " g");
  });
}

set_meal_plan(
  `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000`
);

$("#selectdiet").on("change", function () {
  let url = "";
  if (this.value === "") {
    url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000`;
    set_meal_plan(url);
  } else {
    url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=${this.value}`;
    set_meal_plan(url);
  }
});
