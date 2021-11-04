const firstName = "Yurii";
const secondName = "Dudok";
let age = 23;

console.log(firstName, secondName, age); //простий вивід даних


let Cars = ["BMW", "Audi", "Hundai", "Honda"];
console.log(typeof Cars);
Cars [2] = "Citroen";
console.log(Cars[2]); // створення масиву і відображення одного з його елементів

let productCategoryID = {
smartphones : 1,
goodsForHome: 2,
clothes: 3,
pcAndLaptops: 4,
userCanBuyGoods: true,
}; //створення об'єкту

console.log(typeof productCategoryID.userCanBuyGoods, typeof productCategoryID.clothes); 
//виведенення типів даних 

let a;
a = 10;
const informMessage = "Goods on website remaining: ";
console.log(informMessage + a); //додавання рядка і числа в одне значення

let A = "6";
let b = 6;
console.log(A===b); // порівняння за значеннями і за типами

 let q = 10;
 let w = "10";
 console.log(typeof(q.toString() === w)); // boolean, тому що прирівнюємоємо

 let Q = 10;
 let W = "10";
 console.log(Q == W); // true, тому шо перевірили лише по значенню, а не також за типом данних

 let e = 10;
 console.log(typeof(e.toString())); // число на рядок, ти даних

// оператори присвоєння 

const відрізокА = 10;
const відрізокБ = 23;
const sum = відрізокА + відрізокБ;
console.log("Сума відрізків а та б =", sum);
//
 const MATH_PI = 3.14;
 const r = 10;
 const result = r * r * MATH_PI;
 console.log(result);

 let result1 = 10 ** 2;
 console.log(result1 * MATH_PI);
//
 let А = 10;
 let Б = 23;
 let В = 40;
 В += А;
 console.log(В);

 let uName = "Yurii";
 let lNane = "Dudok";
 console.log(uName + " " + lNane);
// порівняння
const PI = 3.14;
const corner = 45;
const userName = "Yurii";

console.log(PI == 3.14);
console.log (userName == "Stepan");
console.log (20 > corner);
console.log(45 == corner);
console.log(12 < corner);
console.log(0 !=  corner);


// використання тернарного оператора
 const catA = 6;
 const catB = 8;
 const formula = "hypotenuseC";

 const result2 = formula === "hypotenuseC"
 ? Math.sqrt((catA ** 2) + (catB ** 2))
 : catA * catB;
 console.log(formula, result2);

 //

 const hypotenuse = "C";

 console.log("C" !== hypotenuse); // false because "C" == "C"

 // використання && , and
const cornerAlpha = 30;
const hypoE = 10;
const catQ = 6;
const catT = cornerAlpha === 30 && hypoE === 10
? (0.5 * hypoE)
: Math.sqrt((hypoE ** 2) - (catQ ** 2));
console.log(catT);  
 //result 5

// використання ! not
const cornerBeta = 30;
const hypoB = 10;
const catN = 6;
  const catM = cornerBeta !== 30 && hypoB === 10
  ? (0.5 * hypoB)
  : Math.sqrt((hypoB ** 2) - (catN ** 2));
  console.log(catM);
// result 8

// використання || or
const cornerGamma = 30;
const hypoP = 10;
const catO = 6;
 const catI = cornerGamma !== 30 || hypoP !== 10
 ? (0.5 * hypoP)
 : Math.sqrt((hypoP ** 2) - (catO** 2));
 console.log(catI);
// result 8

// використання умовного оператора if
 const катетА = 6;
 const кут = 30;
 const гіпотенузаС = 10;
 let катетБ;

 if (кут === 30) {
     катетБ = 0.5 * гіпотенузаС;
 }
 console.log(катетБ);

// використання if...else...if
const кутАльфа = 30;
const гіпотенузаВС = 10;
 if (кутАльфа == 30) {
     console.log("Катет що лежить навпроти кута 30 град = половині гупотенузи і рівний: " +  0.5 * гіпотенузаВС);
} else if (кутАльфа == 45) {
    console.log("Якщо кут рівний 45 град , то цей прямокутний трикутник - рівнобедрений");
} else if (кутАльфа == 0 || кутАльфа == null) {
     console.error("Значення поля не може бути порожнім або рівне нулю!");
}

// використання switch

let song = "Uprising";

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
    case null:
        console.log("Field cant be empty");
        break;
    default: 
        console.log("Your song is temporary out of our music base");
}
