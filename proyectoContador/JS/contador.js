let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;

        if (cuenta === 10) {
    document.getElementById("numero").style.color = "red";
    }
    
    if (cuenta === 20) {
    document.getElementById("numero").style.color = "green";
    }    

    if (cuenta === 30) {
    document.getElementById("numero").style.color = "pink";
    }
    if (cuenta === 40) {
    document.getElementById("numero").style.color = "purple";
    }
    
    if (cuenta === 1) {
    document.getElementById("numero").style.color = "blue";
    }

    if (cuenta === 0) {
    document.getElementById("numero").style.color = "black";
    }

    if (cuenta === 150) {
    alert("Para ya le diste mucho a aumentar");
}
}

function disminuir() {
    cuenta--;
    document.getElementById("numero").innerHTML = cuenta;

    if (cuenta === -10) {
    document.getElementById("numero").style.color = "red";
    }

    if (cuenta === -20) {
    document.getElementById("numero").style.color = "green";
    }

    if (cuenta === -30) {
    document.getElementById("numero").style.color = "pink";
    }

    if (cuenta === -40) {
    document.getElementById("numero").style.color = "purple";
    }

    if (cuenta === -1) {
    document.getElementById("numero").style.color = "blue";
    }

    if (cuenta === 0) {
    document.getElementById("numero").style.color = "black";
    }

    if (cuenta === -150) {
    alert("Para ya le diste mucho a disminuir");
}

}

function resetear() {
    cuenta = 0;
    document.getElementById("numero").innerHTML = cuenta;
    if (cuenta === 0) {
    document.getElementById("numero").style.color = "black";
    }
}



