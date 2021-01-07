// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную
// строку состоящую только из слов разделённых пробелом(параметр string) и возвращает
// самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

function findLongestWord(string) {
  // Пиши код ниже этой строки
    const strings = string.split(' ');
    let bigString = strings[0];

    for (let i = 0; i < strings.length; i += 1) { 
        // console.log(i);
        let indexString = strings[i];
        // console.log(indexString);
        // console.log(indexString.length);

        if (indexString.length > bigString.length)
            bigString = indexString
        }
return bigString

    
    
  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));