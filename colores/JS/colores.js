const button = document.getElementById("colorButton");

function randomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `#${hex.toUpperCase()}`;
}

function updateColor() {
  const color = randomHexColor();
  document.body.style.backgroundColor = color;
  button.textContent = color;

  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  button.style.color = luminance > 0.6 ? "#111111" : "#ffffff";
}

button.addEventListener("click", updateColor);
window.addEventListener("load", updateColor);

