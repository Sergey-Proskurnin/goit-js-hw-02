/*
 * Напиши скрипт поиска самого большого числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let bigNumber = numbers[numbers.length - 1];

for (const number of numbers) {
  if (number > bigNumber) {
      bigNumber = number;
      console.log(bigNumber);
      
  }
}

console.log('bigNumber: ', bigNumber);
