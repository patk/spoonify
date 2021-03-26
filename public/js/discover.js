console.log("hello from discover");
console.log("API KEY FROM FRONT END IS: " + `${api_key}`);

$("#discover-link").toggleClass("active");

const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=chicken%20soup&excludeingredients=mustard&includeingredients=chicken&minLength=0&maxLength=999&offset=0&number=10",
  method: "GET",
  headers: {
    "x-rapidapi-key": "0f8678beb3mshde23e1755876201p142a97jsnca10e1ca4d77",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  let videoUrl = `https://www.youtube.com/embed/${response.videos[0].youTubeId}`;
  $(".hero-video").attr("src", videoUrl);
});
