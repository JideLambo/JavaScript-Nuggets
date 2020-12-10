// dot notation
const person = {
  name: "Sammie",
};
console.log(person.name);
person.age = 30;
console.log(person); // {name: 'Sammie', age: 30}

// square bracket notation
const movies = {
  "movie-categories": ["Action", "DocuSeries"],
};
console.log(movies["movie-categories"]); // ['Action', 'DocuSeries']

// Dynamic Object Keys
let appState = "loading";
appState = "error";
const brandName = "computer";
const app = {
  [appState]: true,
};
app[brandName] = "apple";
console.log(app); // {error: true, computer: 'apple'}

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "Sara");
updateState("job", "developer");
updateState("loading", false);
updateState("skills", ["front-end development", "data management"]);

console.log(state); // { loading: false, name: 'Sara', job: 'developer', skills: ['front-end development','data management']}
