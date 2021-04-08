console.log("hello from profile");

$("#profile-link").toggleClass("active");

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let date = [];
for (let i = 0; i < diary_parsed.length; i++) {
  date.push(diary_parsed[i].diary_date.toString().slice(0, 10));
}
let uniqueDate = date.filter(onlyUnique);

// get daily calories intake
let caloriesIntake = [];
for (let i = 0; i < uniqueDate.length; i++) {
  //console.log(uniqueDate[i]);
  let dailyCalories = 0;
  for (let j = 0; j < diary_parsed.length; j++) {
    if (uniqueDate[i] === diary_parsed[j].diary_date.toString().slice(0, 10)) {
      dailyCalories += diary_parsed[j].calories;
    }
  }
  caloriesIntake.push(dailyCalories);
}

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
      data: caloriesIntake,
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
    categories: uniqueDate,
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
  labels: ["Carbs", "Protein", "Fat"],
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

// water intake chart
var waterIntakeOption = {
  chart: {
    height: 280,
    type: "radialBar",
    fontFamily: "Poppins, sans-serif",
  },
  series: [72],
  colors: ["#bcdf3f"],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#333",
        startAngle: -90,
        endAngle: 90,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "20px",
          show: true,
          offsetY: -10,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "butt",
  },
  labels: ["Progress"],
};

new ApexCharts(
  document.querySelector("#waterchart"),
  waterIntakeOption
).render();

$("#add-food-button").click(() => {
  $("#food-intake-table").hide();
  $("#add-food-diary").show();
});

$("#cancel-add-food-button").click(() => {
  $("#add-food-diary").hide();
  $("#food-intake-table").show();
});
