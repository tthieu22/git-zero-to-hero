const colorButton = document.getElementById("colorButton");
const colorHexSpan = document.getElementById("colorHex");

const colors = [
  "#f3a683",
  "#f7d794",
  "#77dd77",
  "#f8a5c2",
  "#c7ecee",
  "#f1f2f6",
];
let currentColorIndex = 0;

// Set initial color
document.body.style.backgroundColor = colors[currentColorIndex];
colorHexSpan.textContent = colors[currentColorIndex];

colorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const newColor = colors[currentColorIndex];
  document.body.style.backgroundColor = newColor;
  colorHexSpan.textContent = newColor;
});
