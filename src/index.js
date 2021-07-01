const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let countSymbols = expr.length / 10; // количество символов c пробелами
  let result = "";
  let part = "";
  let step = 0;
  for (let i = 0; i < countSymbols; i++) {
    // console.log(expr.slice(i, 10));
    part = expr.slice(step, step + 10);
    if (part.includes("*")) {
      result = result + " ";
    }
    if (part.includes("1")) {
      let letterMorze = "";
      let stepLetter = 0;
      for (let z = 0; z < 5; z++) {
        partLetter = part.slice(stepLetter, stepLetter + 2);
        if (partLetter == 10) {
          letterMorze = letterMorze + ".";
        }
        if (partLetter == 11) {
          letterMorze = letterMorze + "-";
        }
        stepLetter = stepLetter + 2;
      }

      result = result + MORSE_TABLE[letterMorze];
    }
    step = step + 10;
  }
  return result;
}

module.exports = {
  decode,
};
