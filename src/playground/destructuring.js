//Object destructuring
/*
console.log("ola");

const person ={
    name : "Ivan",
    age: 26,
    location:{
        city: "Zagreb",
        temp: -12
    }
};


const {name, age} = person;


console.log(`${name} is ${age}`);



console.log(`Its ${person.location.temp} in ${person.location.city}`);


const {city,temp} = person.location;

console.log(`Its ${temp} in ${city}`);

//renaming variables
const {city: livingCity ,temp: temperature} = person.location;

console.log(`Its ${temperature} in ${livingCity}`);


//default values when destructuring

//const {name = "Anonymous", age} = person;


const book ={
    title : "Name of book",
    author: "Book author",
    publisher: {
     //   name: "Publisher name"
    }
};

const {name:publisherName = "Unknown"} = book.publisher;


console.log(publisherName);

*/

//Array destructuring


const address = ["12999 magic mala", "brodsko posavska", "grvatsaka"];

console.log(`You are in ${address[1]} ${address[2]}`);


//const [street, city,state,zip] = address;

//console.log(`You are in ${street} ${zip}`);


const [, city, ,zip = 10000] = address;

console.log(`You are in ${city} ${zip}`);

const coffe = ["coffe", "12","10","8"];

const [item, , medium, ] = coffe;


console.log(`A ${item} costs ${medium}`);

