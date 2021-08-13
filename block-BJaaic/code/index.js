// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalmethod = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = numberOfLegs;
    return this.location.Location;
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

// dogMethods
let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (name) {
    this.name = name;
    returnthis.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
function createDog(location, numberOfLegs, name, color) {
  let obj = createAnimal(location, numberOfLegs);
  obj.location = Location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}
