# fs-nursery-catalog
In this workshop, you will practice using Maps and Sets by building a plant nursery catalog.

Step 1
In this workshop, you'll build a plant nursery catalog while practicing JavaScript's Map and Set objects.

To represent each plant in your catalog, you'll use objects, each with three properties:

commonName, the common name of the plant
scientificName, the scientific name (or latin name) of the plant
cultivar, the variety of the plant
Start by creating an object with the three properties above for the Spanish lavender (scientific name Lavandula stoechas) of a cultivar called Ballerina and assign it to a variable named ballerina.

Step 2
Now create another object, with the same three properties, to represent another cultivar of spanish lavender called Pretty Polly, and assign it to a variable named prettyPolly.

Step 3
The remaining plant objects have been added for you. Now it's time to create your catalog.

Like regular JavaScript objects, Map objects contain a collection of key-value pairs. To create a Map object, you can use the Map constructor:

Example Code
const myMap = new Map();
Declare a catalog variable and assign it a Map object.

Step 4
Map objects remember the order in which the keys are inserted in the map. To set a key-value pair in your map object, you can use the set method. The following sets the key "name" to the value "Jerry" in the myMap map object.

Example Code
myMap.set("name", "Jerry");
Set the "ballerina" key to the value of your ballerina object in your catalog map. Then, log your catalog to the console.

Note that to see your map object properly you'll have to open the browser console.

Step 5
The size property of a Map object returns the number of elements in the map. Log the size of your catalog to the console.

Step 6
Unlike regular objects, for which keys must always be strings, map objects allow you to use any datatype as keys. In your catalog, you're going to use object-object key-value pairs, associating each of your plant object with an object containing the number of available pots for different sizes.

Modify your set call to use your ballerina object as key. For the value, use an object containing three properties, small, medium, and large, each with the value of a positive integer.

Step 7
Add another key-value pair to your catalog. Use your prettyPolly variable as the key and make the value an object with small, medium, and large properties whose values are integers again.

Step 8
Keep adding the remaining plants to your catalog as you did in the previous steps.

Step 9
Now that you added all your plants to the catalog, remove your console.log(catalog.size) call.

Step 10
When you need to retrieve an element from a map, you can use the get method. It takes a key as its argument, and returns the associated value.

Use the get method to retrieve the value of the ballerina key from your catalog assign it to a variable named getBallerina. Then, log your new variable to the console.

Step 11 
When the value associated with a key is an object, the get method will return a reference to that object. You can use that reference to modify the object inside the map.

To test it, set the small property of getBallerina to an integer different from 20. Then, look at the browser console to check that the value has changed in your catalog.

Step 12
Next, remove the getBallerina declaration and each reference to it from your code.