// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters); // ['u','d','e','m','y']

const boys = ["john", "matt", "kari"];
const girls = ["kavi", "jess"];
const bestfriends = "arnold";

const friends = [...boys, ...girls, bestfriends];
console.log(friends); // ["john", "matt", "kari", "kavi", "jess", "arnold"]

//copy
const newfriends = [...friends];
newfriends[0] = "kenny";
console.log(friends); // ["john", "matt", "kari", "kavi", "jess", "arnold"]
console.log(newfriends); //["kenny", "matt", "kari", "kavi", "jess", "arnold"]

// ES8 Objects
const person = { name: "jide", job: "developer" };
const newPerson = { ...person, city: "helsinki", name: "kari" };
console.log(person); //{name: "jide", job: "developer"}
console.log(newPerson); //{name: "kari", job: "developer", city: "helsinki"}
