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
