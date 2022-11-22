"use strict";
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

// const num = 3;
// const num2 = 2;

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/
// const total = 20 ** 10;
// console.log(total);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const isEven = 30 % 2;
// console.log(isEven);
/*
  ? Дано 70 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
// */
// const totalMinutes = 70;
// let hours = totalMinutes / 60;
// let minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// hours = Math.floor(hours);
// console.log(hours);
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(hours);
// console.log(minutes);
// console.log(`${hours}:${minutes}`);

/*
 * Number.parseInt() Number.parseFloat()
 */
// const num = prompt("Введіть перше число");
// const num2 = prompt("Введіть друге число");
// console.log(num);
// console.log(num2);
// const result = num + num2;
// console.log(result);

// const px = "43px";
// console.log(Number(px));
// console.log(Number.parseInt(px));

// const str = "24.5px";
// console.log(Number(str));
// console.log(Number.parseFloat(str));

// let number = "102.5km65191";
// number = Number.parseFloat(number);
// console.log(number);

// const str = Number.parseInt("4abc");
// console.log(str);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
//  */
// console.log(Math.ceil(5.34)); //
// console.log(Math.round(5.34)); //
// console.log(Math.round(5.5)); //
// console.log(Math.floor(3.5)); //
// console.log(Math.floor(3.6)); //
// console.log((12345.6859).toFixed(3));
// console.log(Math.max(20, 10, 50, 40, 94)); //
// console.log(Math.min(20, 10, 50, 40, 94, -4)); //
// console.log(Math.pow(2, 6));
// console.log(2 ** 2);
// console.log(Math.random() * (100 - 1) + 1);

/*
  ? Згенеруйте рандомне число:
  ? от 0 до 1;
  ? от 10 до 50.
*/
const min = 1;
const max = 100;
console.log(Math.floor(min + Math.random() * (max + 1 - min)));

// const randomNumber = Math.random();
// console.log(randomNumber);
