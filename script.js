const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const currentDay = Date().split(" ")[0].toLowerCase();

const rectangles = document.querySelectorAll(".rectangle");
const days = document.querySelectorAll(".chart__day");
const amounts = document.querySelectorAll(".chart__amount");

const show = (i) => {
  amounts[i].style.visibility = "visible";
};

const hide = (i) => {
  amounts[i].style.visibility = "hidden";
};

for (let i = 0; i < data.length; i++) {
  rectangles[i].style.height = `${data[i].amount + 40}px`;
  days[i].innerHTML = data[i].day;
  amounts[i].innerHTML = `$${data[i].amount}`;
}

for (let i = 0; i < rectangles.length; i++) {
  if (rectangles[i].classList.contains(currentDay)) {
    rectangles[i].style.backgroundColor = "hsl(186, 34%, 60%)";
  }
  rectangles[i].addEventListener("mouseover", () => {
    show(i);
  });

  rectangles[i].addEventListener("mouseout", () => {
    hide(i);
  });
}
