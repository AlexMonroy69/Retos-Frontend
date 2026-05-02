const button = document.getElementById("colorButton");

function randomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `#${hex.toUpperCase()}`;
}

function updateColor() {
  const color = randomHexColor();
  document.body.style.backgroundColor = color;
  button.textContent = color;
}

button.addEventListener("click", updateColor);
window.addEventListener("load", updateColor);

//hola mundo