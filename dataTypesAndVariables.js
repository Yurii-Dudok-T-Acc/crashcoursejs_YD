// const firstName = "Yurii";
// const secondName = "Dudok";
// let age = 23;

// console.log(firstName, secondName, age); простий вивід даних


// let Cars = ["BMW", "Audi", "Hundai", "Honda"];
// console.log(typeof Cars);
// Cars [2] = "Citroen";
// console.log(Cars[2]); // створення масиву і відображення одного з його елементів

// let productCategoryID = {
// smartphones : 001,
// goodsForHome: 002,
// clothes: 003,
// pcAndLaptops: 004,
// userCanBuyGoods: true,

// }; //створення об'єкту

// console.log(typeof productCategoryID.userCanBuyGoods, typeof productCategoryID['clothes']); виведенення типів даних 

// let a;
// a = 10;
// const informMessage = "Goods on website remaining: ";
// console.log(informMessage + a); //додавання рядка і числа в одне значення

// let a = "6";
// let b = 6;
// console.log(a===b); // порівняння за значеннями і за типами

// let a = 10;
// let b = "10";
// console.log(typeof(a.toString() === b)); // boolean, тому що прирівнюємоємо

// let a = 10;
// let b = "10";
// console.log(a == b); // true, тому шо перевірили лише по значенню, а не також за типом данних

// let a = 10;
// console.log(typeof(a.toString())); // число на рядок, ти даних

// const a = 10;
// const b = 23;
// const sum = a +b;
// console.log("Sum a and b =", sum);

// const MATH_PI = 3.14;
// const r = 10;
// const result = r * r * MATH_PI;
// console.log(result);

// let result1 = 10 ** 2;
// console.log(result1 * MATH_PI);

// let a = 10;
// let b = 23;
// let c = 40;
// c += a;
// console.log(c);

// let uName = "Yurii";
// let lNane = "Dudok";
// console.log(uName + " " + lNane);
/*
const PI = 3.14;
const corner = 45;
const uName = "Yurii";

console.log(PI == 3.14);
console.log (uName == "Stepan");
console.log (20 > corner);
console.log(45 == corner);
console.log(12 < corner);
console.log(0 !=  corner);
*/

// використання тернарного оператора
// const catA = 6;
// const catB = 8;
// const formula = "hypotenuseC";

// const result = formula === "hypotenuseC"
// ? Math.sqrt((catA ** 2) + (catB ** 2))
// : catA * catB;
// console.log(formula, result);

// const catA = 6;
// const corner = 30;
// const hypotenuse = "C";
// const hypoC = 10;

// console.log("C" !== hypotenuse); // false because "C" == "C"

// використання &&  and

//  const catB = corner === 30 && hypoC === 10
//  ? (0.5 * hypoC)
//  : Math.sqrt((hypoC ** 2) - (catA ** 2));
//  console.log(catB);  
// result 5

// використання ! not

//  const catB = corner !== 30 && hypoC === 10
//  ? (0.5 * hypoC)
//  : Math.sqrt((hypoC ** 2) - (catA ** 2));
//  console.log(catB);
// result 8

// використання || or

// const catB = corner !== 30 || hypoC !== 10
// ? (0.5 * hypoC)
// : Math.sqrt((hypoC ** 2) - (catA ** 2));
// console.log(catB);
// result 8

// використання умовного оператора if
// const catA = 6;
// const corner = null;
// const hypoC = 10;
// let catB;

// if (corner === 30) {
//     catB = 0.5 * hypoC;
// }
// console.log(catB);

// використання if...else...if
// if (corner == 30) {
//     console.log("Катет що лежить навпроти кута 30 град = половині гупотенузи і рівний: " +  0.5 * 10);
// } else if (corner == 45) {
//     console.log("Якщо кут рівний 45 град , то цей прямокутний трикутник - рівнобедрений");
// } else if ( corner == 0 || corner == null) {
//     console.error("Значення поля не може бути порожнім або рівне нулю!");
// }

// використання switch

const song = null;

switch(song) {
    case "Ангела": 
        console.log("Yes, its Бумбокс!");
        break;
    case "Pretender":
        console.log("Yes, its Foo Figters!");
        break;
    case "Comatose": 
        console.log("Yes, its Skillet!");
        break;
    case null || " ":
        console.log("Enter name of song");
        break;
    default: 
        console.log("Your song is temporary out of our music base");
}