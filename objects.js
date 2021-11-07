// object#1
const laptop ={
    name: "Lenovo",
    model: "B50-70",
    color: "white",
    hasDVDrom: false,
};
laptop.hasMiniJack = true;
laptop.keyboard = true;
// console.log(laptop);

if (laptop.color !== "black") {
    laptop.color = "black";
}
// console.log("before", laptop);

laptop.hasSSD = true;
// console.log("after", laptop);

if (laptop.hasOwnProperty ("hasSSD")) {
    laptop.hasSSD = false;
}
console.log(laptop);

const newField = "hasHDMI";
laptop[newField] = true;

console.log(laptop);
console.log(laptop.valueOf());

//object #2

const LydiaNPC = {
    typeOfNPC : "follower",
    name : "Lydia",
    race : "nord",
    class : "warrior",
    armor : "Steel armor",
    halmet : null,
    gloves : "Steel gloves",
    boots: "Steel boots",
    shield : "Steel shield",
    weaponMelee : "Steel sword",
    weaponRange : "Imperial bow",
    spells : null,
};

console.log (LydiaNPC);
Object.freeze(LydiaNPC);
console.log(Object.isFrozen(LydiaNPC));
LydiaNPC.halmet = "Steel halmet";

const SeranaNPC = Object.assign({}, LydiaNPC);
console.log (SeranaNPC);

SeranaNPC.name = "Serana";
SeranaNPC.spells = "Vampric Drain";
SeranaNPC.race = "vampire";
SeranaNPC.armor = "Vampire Cloak";
SeranaNPC.class = "vampire";

console.log (SeranaNPC);

console.log("ключі", Object.keys(SeranaNPC));

console.log("значення ключів", Object.entries(LydiaNPC));

// object #3

const book = {
    isBoringBook : true,
    printPresentation: function () {
        console.log(`Book ${this.nameOfBook}, is written by ${this.author}, it is boring book: ${this.isBoringBook}`);
    }   
};

const footPrints = Object.create(book);
footPrints.isBoringBook = false;
footPrints.nameOfBook = "Сліди на дорозі";
footPrints.author = "Валерій Маркус";
footPrints.printPresentation();


	
