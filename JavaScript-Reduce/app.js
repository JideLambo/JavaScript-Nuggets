// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('accumulation') - total of all calculations
// 2nd parameter ('currentValue') - current iteration/value

const staff = [
  { name: "Suvi", age: 20, position: "developer", salary: 2500 },
  { name: "Marianne", age: 25, position: "designer", salary: 2300 },
  { name: "Anna", age: 27, position: "the boss", salary: 3000 },
  { name: "Bob", age: 20, position: "intern", salary: 1000 },
];

const monthlyTotal = staff.reduce((total, currentSalary) => {
  const result = document.querySelector("#result");
  total += currentSalary.salary;
  console.log(total);
  result.innerHTML = total;
  return total;
}, 0);
