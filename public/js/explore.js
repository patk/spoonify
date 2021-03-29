console.log("hello from explore");
console.log("API KEY FROM FRONT END IS: " + `${api_key}`);

$("#explore-link").toggleClass("active");

/*const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?cuisine=vietnamese",
  method: "GET",
  headers: {
    "x-rapidapi-key": `${api_key}`,
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  console.log("RESPONSE LENGTH: " + response.videos.length);
  let video_index = Math.floor(Math.random() * response.videos.length);
  let videoUrl = `https://www.youtube.com/embed/${response.videos[video_index].youTubeId}`;
  $(".hero-video").attr("src", videoUrl);
  $(".hero-container").css({
    background:
      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))" +
      ", " +
      "url(" +
      `https://img.youtube.com/vi/${response.videos[video_index].youTubeId}/maxresdefault.jpg` +
      ")",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  });

  let heroDetails = `
  <h1>${response.videos[video_index].shortTitle}</h1>
  <h3>Rating: ${response.videos[video_index].rating}</h3>
  `;

  $(".hero-details-container").append(heroDetails);
});*/

/*var interval = setInterval(function () {
  var countForVideo = document.getElementById("heroBackgroundVideo").readyState;
  if (countForVideo == 4) {
    document.getElementById("heroBackgroundVideo").play();
    clearInterval(interval);
  }
}, 2000);*/
