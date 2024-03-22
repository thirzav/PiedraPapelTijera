const btnPiedra = document.getElementById("btnPiedra");
const resultadoPc = document.getElementById("resultadoPc");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
const resultadoPlayer = document.getElementById("resultadoPlayer");
const textoPc = document.getElementById("textoPc");
const textoPlayer = document.getElementById("textoPlayer");
const textoResultado = document.getElementById("textoResultado");

const piedraPapelTijera = ["🪨", "🖐️", "✂️"];

function randomElement(array) {
    let elementoAleaotrio = Math.floor(Math.random() * array.length);
    return array[elementoAleaotrio];
}

btnPiedra.addEventListener("click", function() {
    const seleccionPc = randomElement(piedraPapelTijera);
    textoPc.innerText = "El ordenador eligió: "
    resultadoPc.innerText = seleccionPc;
    textoPlayer.innerText = "tú eligiste: "
    resultadoPlayer.innerText = "🪨";

    if (seleccionPc === "🪨") {
        textoResultado.innerText = "EMPATE";
    } else if (seleccionPc === "🖐️") {
        textoResultado.innerText = "¡Perdiste! Papel envuelve a piedra.";
    } else {
        textoResultado.innerText = "¡Ganaste! Piedra aplasta tijeras.";
    }
});

btnPapel.addEventListener("click", function() {
    const seleccionPc = randomElement(piedraPapelTijera);
    textoPc.innerText = "El ordenador eligió: "
    resultadoPc.innerText = seleccionPc;
    textoPlayer.innerText = "tú eligiste: "
    resultadoPlayer.innerText = "🖐️";

    if (seleccionPc === "🖐️") {
        textoResultado.innerText = "EMPATE";
    } else if (seleccionPc === "✂️") {
        textoResultado.innerText = "¡Perdiste! Papel envuelve a piedra.";
    } else {
        textoResultado.innerText = "¡Ganaste! Piedra aplasta tijeras.";
    }
});

btnTijera.addEventListener("click", function() {
    const seleccionPc = randomElement(piedraPapelTijera);
    textoPc.innerText = "El ordenador eligió: "
    resultadoPc.innerText = seleccionPc;
    textoPlayer.innerText = "tú eligiste: "
    resultadoPlayer.innerText = "✂️";

    if (seleccionPc === "✂️") {
        textoResultado.innerText = "EMPATE";
    } else if (seleccionPc === "🪨") {
        textoResultado.innerText = "¡Perdiste! Papel envuelve a piedra.";
    } else {
        textoResultado.innerText = "¡Ganaste! Piedra aplasta tijeras.";
    }
});

