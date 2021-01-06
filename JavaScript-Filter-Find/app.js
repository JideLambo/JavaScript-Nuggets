// Filter - returns a new array, can manipulate the size of new array (unline map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  {
    name: "anna",
    age: 20,
    position: "developer",
  },
  {
    name: "tim",
    age: 25,
    position: "designer",
  },
  {
    name: "Abbey",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 19,
    position: "intern",
  },
];

const fruits = ["apple", "bananna", "grapes"];
// Filter
const youngPeople = people.filter((person) => {
  return person.age <= 20;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position == "developer");
console.log(developers);

// no match
const seniorDevs = people.filter(
  (person) => person.position === "senior developer"
);
console.log(seniorDevs); // [] you will always get an empty array for no result

// find
const john = people.find((item) => item.name === "john");
console.log(john); // returns object

const apple = fruits.find((item) => item === "apple");
console.log(apple); // returns string

// no match
const oldPerson = people.find((person) => person.age > 30);
console.log(oldPerson); // undefined

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 30);
console.log(randomPerson); // { name: "anna", age: 20, position: "developer" }
