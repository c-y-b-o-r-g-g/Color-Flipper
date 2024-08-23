const colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "teal",
];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log("hcloick");
  const randomColor = colors[Math.trunc(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
