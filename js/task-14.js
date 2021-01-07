// Задание
// Дополни код так, чтобы переменные содержали частичные копии
// исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

//     Тесты
// Объявлена переменная fruits
// Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин', 'банан'].
// Объявлена переменная firstTwoEls
// Значение переменной firstTwoEls это массив ['яблоко', 'слива'].
// Объявлена переменная nonExtremeEls
// Значение переменной nonExtremeEls это массив ['слива', 'груша', 'апельсин'].
// Объявлена переменная lastThreeEls.
// Значение переменной lastThreeEls это массив ['груша', 'апельсин', 'банан'].
// Переменной lastThreeEls присвоена копия части массива fruits после применения
// метода slice с правильными аргументами.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);