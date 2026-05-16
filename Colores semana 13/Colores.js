const rRange = document.getElementById('red');
const gRange = document.getElementById('green');
const bRange = document.getElementById('blue');
const hexDisplay = document.getElementById('salida-hex');

function actualizar() {
    let r = rRange.value;
    let g = gRange.value;
    let b = bRange.value;

    let color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
}

rRange.addEventListener('input', actualizar);
gRange.addEventListener('input', actualizar);
bRange.addEventListener('input', actualizar);