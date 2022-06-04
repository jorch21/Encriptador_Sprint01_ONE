const ingresoTexto = document.getElementById("texto");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const resultadoTexto = document.getElementById("resultado");
const btnCopiar = document.getElementById("copiar");
const letras = "^[a-z !ñ]+$";

document.addEventListener("DOMContentLoaded", () => {
    btnEncriptar.addEventListener("click", encriptarTexto);
    btnDesencriptar.addEventListener("click", desencriptarTexto);
    btnCopiar.addEventListener("click", copiarTexto);
});

function encriptarTexto(e) {

    if (ingresoTexto.value == "") {
        mensajeError("El campo esta vacío")
    } else {
        e.preventDefault();
        resultadoTexto.value = "";
        let texto = ingresoTexto.value;

        if (texto.match(letras) != null) {
            let palabras = texto.split(" ");
            let nuevasPalabras = [];

            for (let palabra of palabras) {
                palabra = palabra.replaceAll("e", "enter");
                palabra = palabra.replaceAll("i", "imes");
                palabra = palabra.replaceAll("a", "ai");
                palabra = palabra.replaceAll("o", "ober");
                palabra = palabra.replaceAll("u", "ufat");

                nuevasPalabras.push(palabra);
            }

            const salida = nuevasPalabras.join(" ");

            resultadoTexto.value = salida;
        } else {
            mensajeError("Solo se permiten letras minúsculas, sin acentos");
            return;
        }
    }


}

function desencriptarTexto(e) {

    if (ingresoTexto.value == "") {
        mensajeError("El campo está vacío")
    } else {
        e.preventDefault();
        resultadoTexto.value = "";
        let texto = ingresoTexto.value;

        if (texto.match(letras) != null) {
            let palabras = texto.split(" ");
            let nuevasPalabras = [];

            for (let palabra of palabras) {
                palabra = palabra.replaceAll("enter", "e");
                palabra = palabra.replaceAll("imes", "i");
                palabra = palabra.replaceAll("ai", "a");
                palabra = palabra.replaceAll("ober", "o");
                palabra = palabra.replaceAll("ufat", "u");
                nuevasPalabras.push(palabra);
            }

            const salida = nuevasPalabras.join(" ");

            resultadoTexto.value = salida;
        } else {
            mostrarError("Solo se permiten letras minúsculas, sin acentos");
            return;
        }
    }


}

function mensajeError(mensaje) {
    const existeError = document.querySelector(".mensaje-error");

    if (!existeError) {
        const areaMensaje = document.getElementById("area-trabajo");
        const parrafoMensaje = document.createElement("p");
        parrafoMensaje.classList.add("mensaje-error");

        parrafoMensaje.textContent = mensaje;
        areaMensaje.appendChild(parrafoMensaje);

        setTimeout(() => {
            parrafoMensaje.remove();
        }, 3000);
    }
}

function copiarTexto(e) {

    if (resultadoTexto.value == "") {
        mensajeCopia("No hay nada para copiar");
    } else {
        e.preventDefault();
        const mensaje = resultadoTexto.value;

        navigator.clipboard.writeText(mensaje);
        mensajeCopia("Texto copiado correctamente");
    }

}

function mensajeCopia(mensaje) {
    const realizaCopia = document.querySelector(".mensaje-copia");

    if (!realizaCopia) {
        const areaCopia = document.getElementById("area-resultado");
        const parrafoMensaje = document.createElement("p");
        parrafoMensaje.classList.add("mensaje-copia");

        parrafoMensaje.textContent = mensaje;
        areaCopia.appendChild(parrafoMensaje);

        setTimeout(() => {
            parrafoMensaje.remove();
        }, 2000);
    }
}