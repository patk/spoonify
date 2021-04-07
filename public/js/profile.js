console.log("hello from profile");

$("#profile-link").toggleClass("active");

// calories intake chart
var calIntakeOption = {
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "calories-intake",
      data: [1850, 2100, 1990, 2000, 1780, 2290, 2170],
    },
  ],
  xaxis: {
    categories: [
      "2021-04-05",
      "2021-04-06",
      "2021-04-07",
      "2021-04-08",
      "2021-04-09",
      "2021-04-10",
      "2021-04-11",
    ],
  },
};

var calIntake = new ApexCharts(
  document.querySelector("#calorieschart"),
  calIntakeOption
);

calIntake.render();

// nutrition intake chart
var nutritionIntakeOption = {
  chart: {
    type: "pie",
  },
  series: [6, 1, 2],
  labels: ["Easy", "Medium", "Difficult"],
};

var nutritionIntake = new ApexCharts(
  document.querySelector("#nutritionchart"),
  nutritionIntakeOption
);

nutritionIntake.render();
