var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var desencryption = () => {
    var message = document.getElementById("encryptText").value;
    var messageLowCase = message.toLowerCase();
    var indexMessage;
    var finalText = "";
    for (letter of messageLowCase) {
        indexMessage = encryptedAlphabet.indexOf(letter);
        if (indexMessage < 0) {
            finalText += letter;
        } else {
            finalText += plainAlphabet[indexMessage];
        };
    };
    document.getElementById("plainText").value = finalText;
};

var encryption = () => {
    var message = document.getElementById("plainText").value;
    var messageLowCase = message.toLowerCase();
    var indexMessage;
    var finalText = "";
    for (letter of messageLowCase) {
        indexMessage = plainAlphabet.indexOf(letter);
        if (indexMessage < 0) {
            finalText += letter;
        } else {
            finalText += encryptedAlphabet[indexMessage];
        };
    };
    document.getElementById("encryptText").value = finalText;
};

// var searchIndex = (letter, sourceAlphabet) => {
//     for (var i = 0; i < sourceAlphabet.length; i++) {
//         if (letter === sourceAlphabet[i])
//             return i;
//     };
//     return -1;
// };

// var assignIndex = (letter, sourceAlphabet, targetAlphabet) => {
//     var letterIndex = searchIndex(letter, sourceAlphabet);
//     // (letterIndex === -1) ? letter : targetAlphabet[letterIndex];
//     if (letterIndex === -1) {
//         return letter
//     } else {
//         return targetAlphabet[letterIndex];
//     };
// };

// var encryption = () => {
//     var message = document.getElementById("plainText").value;
//     var messageLowerCase = message.toLowerCase();
//     var encryptedResult = "";

//     for (character of messageLowerCase) {
//         encryptedResult += assignIndex(character, plainAlphabet, encryptedAlphabet);
//     };
//     document.getElementById("encryptText").value = encryptedResult;
// };

// var desencryption = () => {
//     var message = document.getElementById("encryptText").value;
//     var messageLowerCase = message.toLowerCase();
//     var desencryptedResult = "";

//     for (character of messageLowerCase) {
//         desencryptedResult += assignIndex(character, encryptedAlphabet, plainAlphabet);
//     };
//     document.getElementById("plainText").value = desencryptedResult;
// };

document.getElementById("encryptBtn").addEventListener("click", encryption);
document.getElementById("desencryptBtn").addEventListener("click", desencryption);