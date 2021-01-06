// faster/easier way to access/unpack variable from arrays, objects

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3); // orange, banana, lemon

const [friend, , bob, , kelly, susan] = friends;
console.log(friend, bob, kelly, susan); // john bob kelly undefined

// destructing arrays
let first = "bob";
let second = "john";

[second, first] = [first, second];
console.log(first, second); // john bob
