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

const willowVale = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Willow Vale",
};

const hidcote = {
  commonName: "English lavender",
  scientificName: "Lavandula angustifolia",
  cultivar: "Hidcote",
};

const imperialGem = {
  commonName: "English lavender",
  scientificName: "Lavandula angustifolia",
  cultivar: "Imperial Gem",
};

const royalCrown = {
  commonName: "French lavender",
  scientificName: "Lavandula dentata",
  cultivar: "Royal Crown",
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

// Step 5
// The size property of a Map object returns the number of elements in the map. Log
// the size of your catalog to the console.

// Step 6
// Unlike regular objects, for which keys must always be strings, map objects allow
// you to use any datatype as keys. In your catalog, you're going to use object-object
// key-value pairs, associating each of your plant object with an object containing the
// number of available pots for different sizes.

// Modify your set call to use your ballerina object as key. For the value, use an object
// containing three properties, small, medium, and large, each with the value of a positive integer.

// Step 7
// Add another key-value pair to your catalog. Use your prettyPolly variable as the key and make the
// value an object with small, medium, and large properties whose values are integers again.

const catalog = new Map();
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 12, medium: 3, large: 13 });
catalog.set(willowVale, { small: 31, medium: 14, large: 24 });
catalog.set(hidcote, { small: 31, medium: 14, large: 24 });
catalog.set(imperialGem, { small: 31, medium: 14, large: 24 });
catalog.set(royalCrown, { small: 31, medium: 14, large: 24 });

// Step 10
// When you need to retrieve an element from a map, you can use the get method. It takes a key as its argument,
// and returns the associated value.

// Use the get method to retrieve the value of the ballerina key from your catalog assign it to a variable named
// getBallerina. Then, log your new variable to the console.

// Step 11
// When the value associated with a key is an object, the get method
// will return a reference to that object. You
// can use that reference to modify the object inside the map.

// To test it, set the small property of getBallerina to an integer
// different from 20. Then, look at the browser console to check that
// the value has changed in your catalog.

// Step 12
// Next, remove the getBallerina declaration and each reference to it from your
// code.

// Step 13
// In the next few steps, you'll work on a function that will allow you to
// update the catalog when you sell plants.

// Create a function named sellPlants that takes three arguments: a plant object, the
// pot size and the number of pots to sell, in this order.

// When the specified number of pots is greater then the available pots, make your
// function return Not enough <pot-size> size pots for <item-name>. Only <pot-number>
// left.. Replace <pot-size> with the pot size, <pot-number> with the remaining pots
// for that size, and <item-name> with the scientific name of the plant followed by a
// space and the name of the cultivar wrapped between single quotes.

// To test that everything works, log the result of calling your sellPlants function
// with the ballerina object, "small", and 25 to the console.

function sellPlants(plant, potSize, numPots) {
  if (numPots > plant[potSize]) {
    return `Not enough ${potSize} size pots for ${plant["scientificName"]} '${plant["cultivar"]}'. Only ${plant[potSize]} left.`;
  }
}
