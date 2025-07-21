const colorButton = document.getElementById("colorButton");

const colors = ["#f3a683", "#f7d794", "#77dd77", "#f8a5c2", "#c7ecee"];
let currentColorIndex = 0;

colorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentColorIndex];
});
