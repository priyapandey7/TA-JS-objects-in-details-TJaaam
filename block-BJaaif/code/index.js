/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}

var vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  greet() {
    console.log(`hello`);
  },
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;
  return obj;
}

var sandra = personFromPersonStore("Sandra", 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduction = function () {
  console.log(`hi,my name is ${this.name}`);
};
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  this.greet = function () {
    console.log("Hello");
  };
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  let obj = new personFromConstructor();
  obj.name = name;
  obj.age = age;
  return obj;
}

var mike = personFromConstructor("Mike", 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
function PersonConstructor() {
  this.greet = function () {
    console.log("Hello");
  };
  this.introduce = function () {
    console.log(`Hi my name is this ${this.name}`);
  };
}

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`hello`);
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

// #### Challenge 2/2

// Create a class `DeveloperClass` that creates objects by extending the `PersonClass` class. In addition to having a `name` property and `greet` method, `DeveloperClass` should have an `introduce` method. When called, `introduce` should log the string 'Hello World, my name is [name]'.

class DeveloperClass extends PersonClass {
  constructor(name) {
    super(name);
  }

  introduce() {
    console.log(`'Hello World, my name is ${this.name}`);
  }
}
// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/*** CHALLENGE 2 of 3 ***/

// add code here block-BJaaig
// class personFromConstructor {
//   constructor(name,age)
//   super(name,age)
// }

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
  let obj = adminFactory(name, score);
  Object.setPrototypeOf(obj, adminFromFactory);
  obj.type = "admin";
  return obj;
}

/* Put code here for a method called sharePublicMessage*/
// Create a method called `sharePublicMessage` that logs 'Welcome users!' and will be available to `adminFactory` objects, but not `userFactory` objects. Do not add this method directly in the `adminFactory` function.

adminFunctionStore.sharePublicMessage = function () {
  console.log(`welcome user`);
};

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
