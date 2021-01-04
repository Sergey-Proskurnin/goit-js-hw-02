/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «jAVAsCRIPT», то на выходе должена быть строка «JavaScript» .
 */

const string = 'jAVAsCRIPT';
const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре!!! - ', letter);

  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнет регистре!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

  const isEqual = letter === letter.toUpperCase();

  invertedString += isEqual ? letter.toLowerCase() : letter.toUpperCase();
}

console.log('invertedString: ', invertedString);