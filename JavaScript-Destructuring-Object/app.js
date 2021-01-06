// faster/easier way to access/unpack variable from arrays, objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "helsinki",
  siblings: {
    sister: "jane",
  },
};

const {
  first,
  last: lastName,
  city,
  zip,
  siblings: { sister: favSibling },
} = bob;
console.log(first, lastName, city, zip, favSibling); // bob, sanders, helsinki, undefined, jane

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, city, sister); // bob sanders helsinki jane
}

printPerson(bob);
