function transformaCifra(deslocamento, nome) {
    let resp = []
    for(i = 0; i < nome.length; i++) {
        let decifrando = nome.charCodeAt(i)
        decifrando += deslocamento
        resp.push(decifrando)
    }
    let mensagemDecode = codificar(resp)
    return mensagemDecode
}
function codificar(mensagemCifrada) {
    let palavraCodificada = []
    for(i = 0; i < mensagemCifrada.length; i++) {
        var codificando = String.fromCharCode(mensagemCifrada[i])
        palavraCodificada.push(codificando)
    }
    return palavraCodificada
}

function decode(codificada, deslocamento) {
    let decodedNumbers = [];
    let decodedWord = [];
    codificada.forEach((letra) => {
        decodedNumbers.push(letra.charCodeAt(0));
    })
    decodedNumbers.forEach((number) => {
        decodedWord.push(String.fromCharCode(number - deslocamento));
    })

    return decodedWord;
}


let mensagemCodificada = transformaCifra(1, "Daniel");
let mensagemDecodificada = decode(mensagemCodificada, 1);




console.log(mensagemCodificada.join(""));
console.log(mensagemDecodificada.join(""));