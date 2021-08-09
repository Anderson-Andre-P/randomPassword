// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
// !\"$%&/()=?@~'´.;:+-*_-^<`[]{}|
// 1234567890
// @|c(0*b"BXZFu7fNE<[?2pJHPhrslqiAQ.Y-g$e/;R)n_{4U!-Wj1+T^Mw6=dILD%G`S5\3&v9ak´x:y]~COtz8VKm}o
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~´.;:+-*_-^<`[]{}|1234567890
const characters = '@|c(0*b"BXZFu7fNE<[?2pJHPhrslqiAQ.Y-g$e/;R)n_{4U!-Wj1+T^Mw6=dILD%G`S5\3&v9ak´x:y]~COtz8VKm}o';

let output = document.getElementById("output");

function randomValue(value) {
    return Math.floor(Math.random() * value);
}

function genPassword() {
    let length = document.getElementById('length').value;
    document.getElementById("length-val").textContent = length;
    let str = '';

    for (let i = 0; i < length; i++) {
        let random = randomValue(characters.length);
        str += characters.charAt(random);
    }

    output.value = str;

}

function copyClipboard() {
    output.select();
    document.execCommand('copy');
    alert("Senha Copiada!!!");
}

genPassword();
