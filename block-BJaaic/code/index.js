// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

//inprototypal we put the method inn object

let animalmethod = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = numberOfLegs;
    return this.location;
  },
  summary: function () {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};
function createAnimal(location, numberOfLegs) {
  let obj = Object.create(createAnimal);
  obj.location = Location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}
function createDog(location, numberOfLegs, name, color) {
  let obj = createAnimal(location, numberOfLegs);
  Object.getPrototypeOf(obj, dogMethods); //dog method as a dunnder proto
  obj.name = name;
  obj.color = color;
  return obj;
}

// dogMethods
let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
Object.setPrototypeOf(dogMethods, animalmethod);
// cat
function createCat(location, numberOfLegs, name, colorOfEyes) {
  let obj = createAnimal(location, numberOfLegs);
  Object.getPrototypeOf(obj, catMethods);
  obj.name = name;
  obj.colorOfEyes = colorOfEyes;
  return obj;
}

// catMethods
let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
  changeColor: function (newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(catMethods, animalmethod);
//
