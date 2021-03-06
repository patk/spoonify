console.log("RECIPE ID (FRONTEND): " + `${recipe_id}`);

function set_recipe_info() {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe_id}/information`,
    method: "GET",
    headers: {
      "x-rapidapi-key": `${api_key}`,
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    // recipe's image
    $("#recipe-image").attr(
      "src",
      `https://spoonacular.com/recipeImages/${response.id}-556x370.jpg`
    );

    // recipe's title
    $("#recipe-title").text(`${response.title}`);

    // recipe's preparation minutes
    $("#preparation-time").text(`${response.preparationMinutes}` + " minutes");

    // recipe's cooking minutes
    $("#cooking-time").text(`${response.cookingMinutes}` + " minutes");

    // recipe's servings
    if (response.servings === 1) {
      $("#servings").text(`${response.servings}` + " serving");
    } else {
      $("#servings").text(`${response.servings}` + " servings");
    }

    // recipe's diet
    let diets = [];
    let diets_combined = "";
    $.each(response.diets, (i, diet) => {
      diets.push(diet);
    });
    if (diets.length !== 0) {
      diets_combined = diets.join(", ");
    } else {
      diets_combined = "-";
    }
    $("#diets").text(diets_combined);

    // recipe's summary
    $("#recipe-summary").html(`${response.summary}`);

    // recipe's ingredients
    let ingredients_content = "";
    $.each(response.extendedIngredients, (i, ingredient) => {
      ingredients_content += `
        <div class="ingredient-card">
          <img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}" />
          <p>${ingredient.original}</p>
        </div>
      `;
    });
    $(".ingredients-content").html(ingredients_content);

    // recipe's instructions
    let instructions_content = "";
    $.each(response.analyzedInstructions[0].steps, (i, step) => {
      instructions_content += `
       <h4>Step ${step.number}:</h4>
       <p>${step.step}</p>
      `;
    });

    $(".instructions-content").html(instructions_content);

    // recipe's score
    var options = {
      chart: {
        fontFamily: "Poppins, sans-serif",
        height: 280,
        type: "radialBar",
      },

      series: [response.spoonacularScore],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "40%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: 10,
              show: false,
              color: "#888",
              fontSize: "13px",
            },
            value: {
              color: "#111",
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        colors: ["#bcdf3f"],
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          gradientToColors: ["#fcb97d"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Score"],
    };

    var chart = new ApexCharts(document.querySelector("#score-chart"), options);

    chart.render();
  });
}

set_recipe_info();

$("#save-button").click(() => {
  $("#save-button").css({
    "background-color": "#272932",
    color: "white",
  });
  $("#save-button").html("Saved");
});
