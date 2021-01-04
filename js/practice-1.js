/* Напиши скрипт который подсчитывает сумму всех нечётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1 переменная тотал
let total = 0;
// 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

// 3 на каждой итерации проверить элемент на чётность
// if (number % 2 !== 0) {
//     console.log('Нечетное!!!!');
//     total += number;
// }
// 4 если нечетный плюсуем к тотал
// }
// console.log('Total: ', total);
// }

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 !== 0) {
//     console.log(`${number} - нечетное!!!!`);
//     total += number;
//   }
// }
// console.log('Total: ', total);

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log('Эту итерацию нужно пропустить', number);
    continue;
  }

  console.log(`${number} - нечетное!!!!`);
  total += number;
}

console.log('Total: ', total);