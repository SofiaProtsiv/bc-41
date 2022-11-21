//У змінній $year зберігається рік. Визначте, чи він високосний (у такому році є 29 лютого).
//Рік буде високосним у двох випадках: або він ділиться на 4, але при цьому не ділиться на 100,
//або ділиться на 400.

const year = Number(prompt("Перевірь чи є рік високосним: "));

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0)
  alert(`${year} - високосний рік`);
else alert(`${year} - не високосний рік`);

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

const totalMinutes = prompt("Введіть хвилини: ");

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

const time = `${doubleDigitHours}:${doubleDigitMinutes}`;

console.log(time);

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно
// розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у
// вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = "88,3";
let height = "1.75";

const bmi = (
  Number.parseFloat(weight) /
  Number.parseFloat(height) ** 2
).toFixed(1);

console.log(bmi); // 28.7
