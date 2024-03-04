
//=========================Extração de texto=================================
function extrairTexto() {
    const textarea = document.getElementById('texto-input');
    const texto = textarea.value;
    document.getElementById('texto-output').innerHTML=cifraDeCesar(texto);
}

function extrairTextoDecriptado() {
    const textarea = document.getElementById('texto-input');
    const texto = textarea.value;
    document.getElementById('texto-output').innerHTML=decifraDeCesar(texto);
}
//===========================================================================

//-------------------------cifra-----------------------------------------
function cifraDeCesar(texto) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textoMaiusculo = texto.toUpperCase();
    let resultado = '';

    for (let i = 0; i < textoMaiusculo.length; i++) {
        const char = textoMaiusculo[i];
        if (alfabeto.includes(char)) {
            const indiceOriginal = alfabeto.indexOf(char);
            const indiceCifrado = (indiceOriginal + 3) % 26;
            const charCifrado = alfabeto[indiceCifrado];
            resultado += charCifrado;
        } else {
            resultado += char; // Mantém caracteres não alfabéticos inalterados
        }
    }

    return resultado.toLowerCase();
}


function decifraDeCesar(textoCifrado) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textoCifradoMaiusculo = textoCifrado.toUpperCase();
    let resultado = '';

    for (let i = 0; i < textoCifradoMaiusculo.length; i++) {
        const char = textoCifradoMaiusculo[i];
        if (alfabeto.includes(char)) {
            const indiceCifrado = alfabeto.indexOf(char);
            const indiceOriginal = (indiceCifrado - 3 + 26) % 26;
            const charOriginal = alfabeto[indiceOriginal];
            resultado += charOriginal;
        } else {
            resultado += char; // Mantém caracteres não alfabéticos inalterados
        }
    }

    return resultado.toLowerCase();
}
//---------------------------------------------------------------------------

//_______________copy_____________________________________
const textForcopy = document.querySelector("#texto-output");
const botaoCopiar = document.querySelector("#botaoCopiar");

botaoCopiar.addEventListener("click", 
function() {
    textForcopy.select();
    document.execCommand("copy");
    location.reload();
});
//________________________________________________________
