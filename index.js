// const person = {
// name: "Bivek",
// add: "Sydney",
// bio() {
//     return `Hey this is ${this.name}, live in ${this.add}`;
// },
// };

// console.log(person.bio);

//factory function
function aboutPerson(name, add) {
  return {
    name,
    add,
    bio() {
      return `Hey this is ${this.name}, live in ${this.add}`;
    },
  };
}
const bivekObj = aboutPerson("prem", "sydney");
console.log(bivekObj, bivekObj.bio());

const samObj = aboutPerson("sam", "UK");
console.log(samObj, samObj.bio());
