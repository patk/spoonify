/*console.log("hello from explore");
console.log("API KEY FROM FRONT END IS: " + `${api_key}`);*/

$("#explore-link").toggleClass("active");

// HERO SECTION

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
  let video_index = Math.floor(Math.random() * response.videos.length);
  let videoUrl = `https://www.youtube.com/embed/${response.videos[video_index].youTubeId}`;

  $(".hero-video").attr("src", videoUrl);
});

$("#recipe-search-bar").submit((event) => {
  event.preventDefault();
});

$(".search-button").click(() => {
  const search_value = $("#search-field").val();

  set_recipes(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${search_value}&number=30`,
    `search-result-content`
  );

  // hide meal plan and recipe list sections then show search result section
  $(".meal-plan").hide();
  $(".recipe-list").hide();
  $(".search-result").show();

  // scroll down to the search result section
  $("html,body").animate(
    {
      scrollTop: $(".search-result").offset().top,
    },
    "slow"
  );

  /*$.ajax(search_settings).done(function (response) {
    //console.log(response);

    // hide meal plan and recipe list sections then show search result section
    $(".meal-plan").hide();
    $(".recipe-list").hide();
    $(".search-result").show();

    // scroll down to the search result section
    $("html,body").animate(
      {
        scrollTop: $(".search-result").offset().top,
      },
      "slow"
    );
  });*/
});

$(".back-button").click(() => {
  $(".search-result").hide();
  $(".meal-plan").show();
  $(".recipe-list").show();
});

// MEAL PLAN SECTION

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
    // load meal plan data
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

// RECIPES SECTION

function set_recipes(url, content) {
  const recipes_settings = {
    async: true,
    crossDomain: true,
    url: url,
    method: "GET",
    headers: {
      "x-rapidapi-key": `${api_key}`,
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  $.ajax(recipes_settings).done(function (response) {
    console.log(response);
    // load recipes data
    let recipeContent = "";
    $.each(response.results, (i, recipe) => {
      recipeContent += `
        <div class="recipe-card" id="recipe-${recipe.id}">
          <img src="https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg" />
          <h5>${recipe.title}</h5>
        </div>
      `;
    });

    $(`.${content}`).html(recipeContent);
  });
}

set_recipes(
  `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=%20&number=30`,
  `recipe-list-content`
);

// SEARCH RESULT SECTION
