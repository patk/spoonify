console.log("hello from profile");

$("#profile-link").toggleClass("active");

// calories intake chart
var calIntakeOption = {
  chart: {
    type: "bar",
    height: 280,
    fontFamily: "Poppins, sans-serif",
  },
  series: [
    {
      name: "calories-intake",
      data: [1850, 2100, 1990, 2000, 1780, 2290, 2170],
    },
  ],
  fill: {
    colors: ["#c32222"],
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#fcb97d"],
      stops: [0, 100],
    },
  },
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
    type: "donut",
    height: 280,
    fontFamily: "Poppins, sans-serif",
  },
  series: [6, 1, 2],
  labels: ["Easy", "Medium", "Difficult"],
  colors: ["#66ccff", "#6699ff", "#6666ff", "#6633ff"],
  stroke: {
    show: false,
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
    },
  },
};

var nutritionIntake = new ApexCharts(
  document.querySelector("#nutritionchart"),
  nutritionIntakeOption
);

nutritionIntake.render();
