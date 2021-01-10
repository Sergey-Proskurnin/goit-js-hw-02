// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//     const words = string.split(' ');
//     let bigWord = words[0];

//     for (let word of words) {

//         if (bigWord.length < word.length) {
//             bigWord = word;
//         }
//     }
//     return bigWord
//     // твой код
// };

// Давайте зададим вопрос системе: на данный момент
// самое длинное слово страна  сравниваем его цветок, цветок
// длинее страны ? Ответ нет, самым длинным остаётся страна.Но
// если мы хотим получить самое длинное последнее тогда ставим
// условие если слово длинее или равно предыдущему.А если нужно
// сделать выборку самых длинных слов, то нужно создавать пустой
// массив и уже результаты перебора добавлять туда.Но ещё необходимо
// продумать условие проверки уже для нового массива.Можно попробовать
// 2 цыкла: первый определяет самое длинное слово, а вот если самых длинных
// больше 1 то второй прогоняет по условию добавляет в массив уже.Это первый
// пришедший на ум вариант

const findLongestWord = function (string) {
  const words = string.split(' ');
  let bigWord = words[0];
  let bigWords = [];

  for (let word of words) {
    if (bigWord.length <= word.length) {
      bigWord = word;
    }
  }
  for (let word of words) {
    if (bigWord.length === word.length) {
      bigWords.push(word);
      // words = bigWords.join(', ');
    }
  }
    // words = bigWords.join(', ');
  // console.log(words);
  return bigWords.join(', ');
};
// function index(array, n) {
//   // console.log(indexOf(array));
//   // console.log(array.indexOf(n));
//   return array.length - 1 >= n ? Math.pow(array [n], n) : -1;
//    //your code here
// }  
// console.log(index([1, 2, 3, 4], 8));
// // твой код

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findLongestWord('The quick brown fox jumped over the lazy dog hunter'),
// ); // 'jumped'

// console.log(findLongestWord('Google do a roll coogle')); // 'Google'

// console.log(findLongestWord('May the force be with you coman')); // 'force'
