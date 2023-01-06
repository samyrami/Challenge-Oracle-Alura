function Encrypt(){
    let sentence = document.querySelector("#enDecryptText").value.toLowerCase()

    var encrypter = sentence.replace(/e/img, "enter");
    var encrypter = encrypter.replace(/i/img, "imes");
    var encrypter = encrypter.replace(/a/img, "ai");
    var encrypter = encrypter.replace(/o/img, "ober");
    var encrypter = encrypter.replace(/u/img, "ufat");
    document.querySelector("#textContainer").innerHTML = encrypter
}

let encrypt = document.querySelector(".encrypt");
encrypt.onclick = Encrypt;

function Decrypt(){
    let sentence = document.querySelector("#enDecryptText").value.toLowerCase()

    var dencrypter = sentence.replace(/enter/img, "e");
    var dencrypter = dencrypter.replace(/imes/img, "i");
    var dencrypter = dencrypter.replace(/ai/img, "a");
    var dencrypter = dencrypter.replace(/ober/img, "o");
    var dencrypter = dencrypter.replace(/ufat/img, "u");
    document.querySelector("#textContainer").innerHTML = dencrypter
}
let decrypt = document.querySelector(".decrypt");
decrypt.onclick = Decrypt

function copyButton(){
    var copyButton = document.querySelector("#textContainer");
    copyButton.select();
    copyButton.setSelectionRange(0, 9999);

    document.execCommand("copy");

}


