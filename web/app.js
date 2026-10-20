const formulario = document.getElementById("formulario");
const galeria = document.getElementById("galeria");

function generarGaleria() {
    const size = document.getElementById("size").value;
    const borderWidth = document.getElementById("borderWidth").value;
    const borderColor = document.getElementById("borderColor").value;
    const sharpen = document.getElementById("sharpen").value;
    const blur = document.getElementById("blur").value;

    galeria.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        const numero = String(i).padStart(2, "0");

        const imagen = document.createElement("img");

        imagen.src =
            `/img/image${numero}.jpg?size=${size}&sharpen=${sharpen}`;

        imagen.alt = `Imagen ${numero}`;

        imagen.style.border =
            `${borderWidth}px solid ${borderColor}`;

        imagen.style.filter =
            `blur(${blur}px)`;

        galeria.appendChild(imagen);
    }
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    generarGaleria();
});

generarGaleria();