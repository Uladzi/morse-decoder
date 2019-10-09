const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    const MORSE_TABLE_CORRECT = { " ": "**********" };

    for (let Prop in MORSE_TABLE) {
        MORSE_TABLE_CORRECT[MORSE_TABLE[Prop]] = Prop.replace(/\./g, "10").replace(/\-/g, "11").padStart(10, "0");
    }

    let arr = expr.match(/.{10}/g);

    for (let i = 0; i < arr.length; i++) {
        for (let Prop in MORSE_TABLE_CORRECT) {
            if (arr[i] === MORSE_TABLE_CORRECT[Prop]) {
                arr[i] = Prop;
            }
        }
    }

    return arr.join("");
}

module.exports = {
    decode
}