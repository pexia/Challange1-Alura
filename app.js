const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".text-out");
const btnCopy = document.querySelector(".btn-copy");
const errorMessage = document.getElementById("error-message");
const regex = /^[a-z\s]*$/;

function mostrarMensajeError(mensaje) {
    errorMessage.textContent = mensaje;
    errorMessage.style.display = 'block';
}

function ocultarMensajeError() {
    errorMessage.style.display = 'none';
}

function btnEncriptar() {
    if (regex.test(textArea.value)) {
        ocultarMensajeError();
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    } else {
        mostrarMensajeError("Por favor, ingrese solo letras minúsculas y espacios.");
        textArea.value = "";
    }
}

function btnDesencriptar() {
    if (regex.test(textArea.value)) {
        ocultarMensajeError();
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
    } else {
        mostrarMensajeError("Por favor, ingrese solo letras minúsculas y espacios.");
        textArea.value = "";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;        
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada; 
}      

function copiarAlPortapapeles() {
    mensaje.select(); 
    document.execCommand('copy'); 
}

btnCopy.addEventListener('click', copiarAlPortapapeles);
