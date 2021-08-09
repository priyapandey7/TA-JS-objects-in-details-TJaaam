// @REM ## Create in all 4 formats

// @REM - [ ] Using function to create object
// @REM - [ ] Using Object.create (prototypal pattern)
// @REM - [ ] Using Pseudoclassical Way
// @REM - [ ] Using Class

// @REM ## Requirements

// @REM Create User (class/function) with the following properties.

// @REM - [ ] properties (data):
// @REM   - [ ] name
// @REM   - [ ] id
// @REM   - [ ] noOfProjects
// @REM - [ ] methods:
// @REM   - [ ] getProjects -> return number of project
// @REM   - [ ] changeName -> accepts one parameter (newName)returns old user name
// @REM   - [ ] incrementProject -> returns updated number of projects
// @REM   - [ ] decrementProject -> returns updated number of projects

// @REM Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// function createUser(name, id, noOfProjects) {
//   let user = {};
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;

//   user.getProjects = function () {
//     return user.noOfProjects;
//   };
//   user.changeName = function (newName) {
//     let prevName = user.name;
//     user.name = newName;
//     return prevName;
//   };
//   user.incrementProject = function () {
//     user.noOfProjects += 1;
//     return user.noOfProjects;
//   };
//   user.decrementProject = function () {
//     user.noOfProjects -= 1;
//     return user.noOfProjects;
//   };
//   return user;
// }

// prototyple
// let userMethods = {
//   getProjects: function () {
//     return this.noOfProjects;
//   },
//   changeName: function (newName) {
//     let prevName = this.name;
//     this.name = newName;
//     return prevName;
//   },
//   incrementProject: function () {
//     this.noOfProjects += 1;
//     return this.noOfProjects;
//   },

//   decrementProject: function () {
//     this.noOfProjects -= 1;
//     return this.noOfProjects;
//   },
// };

// function createUser(name, id, noOfProjects) {
//   let user = Object.create(userMethods);
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;
//   return user;
// }

// Pseudoclassical pattern
CreateUser.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (newName) {
    let prevName = this.name;
    this.name = newName;
    return prevName;
  },
  incrementProject: function () {
    this.noOfProjects += 1;
    return this.noOfProjects;
  },

  decrementProject: function () {
    this.noOfProjects -= 1;
    return this.noOfProjects;
  },
};

function CreateUser(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

let aman = new CreateUser("Aman", 123, 23);
let john = new CreateUser("Jhon", 1, 100);
console.group();
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject());
console.log(aman.decrementProject());
console.log(aman.changeName("sunny"));
console.groupEnd();

console.group();
console.log(john.name);
console.log(john.id);
console.log(john.incrementProject());
console.log(john.decrementProject());
console.log(john.changeName("Bran"));
console.log(john.name);
console.groupEnd();

//
