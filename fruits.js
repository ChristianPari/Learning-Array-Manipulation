/*
create an array of various fruits then use the slice() method to create a new array
of citrus fruits
*/

let fruits = ["Apples", "Oranges", "Lemons", "Limes", "Bananas"];

let citrus = fruits.slice(1, 4);
// starts at the second (index 1) element and ends but doesnt include index 4 (Bananas)

console.log(citrus);

/*
would like to know if you are able to then use the leftover elements
to create another array
*/

console.log("All our fruits include:")
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\nThe citrus fruits are:")
for (c = 0; c < citrus.length; c++) {
    console.log(citrus[c]);
}