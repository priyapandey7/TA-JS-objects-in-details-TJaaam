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

function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    user.noOfProjects;
  };
  user.changeName = function (newName) {
    let prevName = user.name;
    user.name = newName;
    return prevName;
  };
  user.incrementProject = function () {
    user.noOfProjects += 1;
    return user.noOfProjects;
  };
  user.decrementProject = function () {
    user.noOfProjects -= 1;
    return user.noOfProjects;
  };
  return user;
}

let aman = createUser("Aman", 123, 23);
let john = createUser("Aman", 123, 23);
console.group();
console.log(aman.name);
console.log(aman.id);
console.log(aman.incrementProject);
console.log(aman.decrementProject);
console.log(aman.changeName("sunny"));
console.groupEnd();

console.group();
console.log(john.name);
console.log(john.id);
console.log(john.incrementProject);
console.log(john.decrementProject);
console.log(john.changeName("Bran"));
console.log(john.name);
console.groupEnd();
