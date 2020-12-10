// Map Method

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
];

// returns a new array
// does not change the size of original array (unline filter)
// uses values from original array when making new one

const ages = people.map((person) => {
  console.log(person);
});
console.log(ages);
