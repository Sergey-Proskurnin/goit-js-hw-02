/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-4';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-8';
// const index = 1;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
const cardToUpdate = 'Карточка-1';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Обновленная карточка-1');

console.table(cards);