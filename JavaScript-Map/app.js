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
  {
    name: "john",
    age: 19,
    position: "intern",
  },
];

// returns a new array
// does not change the size of original array (unline filter)
// uses values from original array when making new one

const getAges = (person) => person.age * 2;
const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");
result.innerHTML = names.join("");
