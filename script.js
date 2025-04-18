// Step 1
// In this workshop, you'll build a plant nursery catalog while
// practicing JavaScript's Map and Set objects.

// To represent each plant in your catalog, you'll use objects,
// each with three properties:

// commonName, the common name of the plant
// scientificName, the scientific name (or latin name) of the plant
// cultivar, the variety of the plant
// Start by creating an object with the three properties above for
// the Spanish lavender (scientific name Lavandula stoechas) of a
// cultivar called Ballerina and assign it to a variable named
// ballerina.

const ballerina = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Ballerina",
};

// Step 2
// Now create another object, with the same three properties, to
// represent another cultivar of spanish lavender called Pretty Polly,
// and assign it to a variable named prettyPolly.

const prettyPolly = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Pretty Polly",
};

// Step 3
// The remaining plant objects have been added for you. Now it's time 
// to create your catalog.

// Like regular JavaScript objects, Map objects contain a collection 
// of key-value pairs. To create a Map object, you can use the Map 
// constructor:

// Example Code
// const myMap = new Map();
// Declare a catalog variable and assign it a Map object.

// Step 4
// Map objects remember the order in which the keys are inserted in the 
// map. To set a key-value pair in your map object, you can use the set method. 
// The following sets the key "name" to the value "Jerry" in the myMap map object.

// Example Code
// myMap.set("name", "Jerry");
// Set the "ballerina" key to the value of your ballerina object in your catalog 
// map. Then, log your catalog to the console.

// Note that to see your map object properly you'll have to open the browser console.

const catalog = new Map();
catalog.set("ballerina", ballerina);
console.log(catalog);