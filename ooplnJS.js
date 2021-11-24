class Devices {
    constructor(characteristics) {
        this.companyName = characteristics.companyName;
        this.hasKeyBoard = characteristics.hasKeyBoard;
        this.releaseYear = characteristics.releaseYear;
    }
    notificationSound() {
        console.log("*Device sound*");
    }
}

class Laptops extends Devices {

    constructor(characteristics) {
        super(characteristics);
        this.color = characteristics.color;
        this.screenExt = characteristics.screenExt;
    }
    notificationSound() {
        console.log("*laptops notification sound*");
    }
}

class Smartphones extends Devices {
    constructor(characteristics) {
        super(characteristics);
        this.color = characteristics.color;
        this.screenExt = characteristics.screenExt;
        this.batteryCapacity = characteristics.batteryCapacity;
    }
    notificationSound() {
        console.log("*smartphones notification sound*");
    }
}


const Asus = new Laptops({
    companyName: "ASUS",
    hasKeyBoard: true,
    releaseYear: 2018,
    color: "black",
    screenExt: "1600x900 px",
});

Asus.notificationSound();
console.log(Asus);

const iPhone7 = new Smartphones({
    companyName: "Apple",
    hasKeyBoard: false,
    releaseYear: 2016,
    color: "black",
    screenExt: "750 x 1334 px",
    batteryCapacity: "2050 mA*h"
});

iPhone7.notificationSound();


function Guitars(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.sound = () => console.log("Guitar sound...");
}

const Taylor = new Guitars("Taylor", "614CE", "wood");

Taylor.sound();

const Cort = new Guitars("Cort", "810 OP", "wood");

console.log(Cort);
Cort.sound();

