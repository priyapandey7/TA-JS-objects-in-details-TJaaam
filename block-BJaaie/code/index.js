// prototypal pattern using inharitance
// let animalmenthods = {
//   eat: function () {
//     console.log(`I live in ${this.location} and I can eat`);
//   },
//   changelocation: function (newLocation) {
//     this.location = newLocation;
//     return this.location;
//   },
//   summary: function () {
//     return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//   },
// };
// function createAnimals(location, numberOfLegs) {
//   let obj = Object.create(animalmenthods);
//   obj.location = Location;
//   obj.numberOfLegs = numberOfLegs;
//   return obj;
// }

// // dogmethods
// function createDog(location, numberOfLegs, name, color) {
//   let obj = createAnimals(location, numberOfLegs);
//   Object.setPrototypeOf(obj, dogsmenthods);
//   obj.name = name;
//   obj.color = color;
//   return obj;
// }

// let dogsmenthods = {
//   bark() {
//     alert(`I am ${this.name} and I can bark 🐶`);
//   },
//   changeName(name) {
//     this.name = name;
//     return this.name;
//   },
//   changeColor(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   },
//   summary() {
//     return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
//   },
// };
// Object.setPrototypeOf(dogsmenthods, animalmenthods);
// // we are using object .setprototypes to change the dunder  proto

// // cat methods

// function createcat(location, numberOfLegs, name, changeColorOfEyes) {
//   let obj = createAnimals(location, numberOfLegs);
//   Object.setPrototypeOf(obj, catssmenthods);
//   obj.name = name;
//   obj.color = changeColorOfEyes;
//   return obj;
// }

// let catsmenthods = {
//   meow() {
//     alert(`I am ${this.name} and I can do mewo meow 😹`);
//   },
//   changeName(name) {
//     this.name = name;
//     return this.name;
//   },
//   changeColorOfEyes(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   },
//   summary() {
//     return `I am ${this.name} and I am of ${this.changeColorOfEyes} color. I can do  meow`;
//   },
// };
// Object.setPrototypeOf(catsmenthods, animalmenthods);
// we are using this  2 times

// pseudoclassical pattern using inharitance

// 1-> In pseudoclassical pattern we don't store the method inside the new Object.
// 2-> we store it inside object prototype

// CreateAnimals.prototype = {
//   eat: function () {
//     console.log(`I live in ${this.location} and I can eat`);
//   },
//   changelocation: function (newLocation) {
//     this.location = newLocation;
//     return this.location;
//   },
//   summary: function () {
//     return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//   },
// };
// function CreateAnimals(location, numberOfLegs) {
//   this.location = Location;
//   this.numberOfLegs = numberOfLegs;
// }
// // createAnimal is parent class i am extending that into create dog class
// // dogmethods

// function CreateDog(location, numberOfLegs, name, color) {
//   createAnimals.call(this, location, numberOfLegs);
//   this.name = name;
//   this.color = color;
// }

// CreateDog.prototype = {
//   bark() {
//     alert(`I am ${this.name} and I can bark 🐶`);
//   },
//   changeName(name) {
//     this.name = name;
//     return this.name;
//   },
//   changeColor(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   },
//   summary() {
//     return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
//   },
// };
// Object.setPrototypeOf(CreateDog.prototype, createAnimals.prototype);
// // we are using object .setprototypes to change the dunder  proto

// // cat methods

// function Createcat(location, numberOfLegs, name, changeColorOfEyes) {
//   createAnimals.call(this, location, numberOfLegs);
//   this.name = name;
//   this.color = changeColorOfEyes;
// }

// Createcat.prototype = {
//   meow() {
//     alert(`I am ${this.name} and I can do mewo meow 😹`);
//   },
//   changeName(name) {
//     this.name = name;
//     return this.name;
//   },
//   changeColorOfEyes(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   },
//   summary() {
//     return `I am ${this.name} and I am of ${this.changeColorOfEyes} color. I can do  meow`;
//   },
// };
// Object.setPrototypeOf(Createcat.prototype, CreateAnimals.prototype);

// inheritance using class pattern

class Animal {
  constructor(location, numberOfLegs) {
    this.location = Location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changelocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

// dogmethods

class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    csuper(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  changeColor(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

// cat methods

class cat extends Animal {
  constructor(location, numberOfLegs, name, changeColorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = changeColorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(name) {
    this.name = name;
    return this.name;
  }
  changeColorOfEyes(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.changeColorOfEyes} color. I can do  meow`;
  }
}
