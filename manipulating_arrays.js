// create array with friends names
let friendsNames = ["Tyler", "Caitlin", "Lakynne"];
console.log(friendsNames);
// NEED REAL LIFE EXAMPLE, but saw that you can manipulate arrays with .push, .pop, .shift, .unshift, .reverse, .sort, .splice, and .slice
friendsNames.splice();
console.log(friendsNames);

friendsNames.pop(); // removes last element from array...also, if assigned to a variable, it will output the corresponding element "Lakynne"
console.log(friendsNames);

friendsNames.push("Kyle"); // adds Kyle to the end of the array...also, if assigned to a variable w/out data in the (), it will output the length of the array
console.log(friendsNames);

friendsNames.shift(); // to remove the first element from the array...also, does similar to .pop() ouput when assigned to a variable
console.log(friendsNames);

friendsNames.unshift("Kelsey"); // adds an element to the beginning of the array...also, does similar to .push() output when assigned to a variable
console.log(friendsNames);

friendsNames.reverse(); // reverses the arrays order
console.log(friendsNames);

friendsNames.sort(); // this sorts the array by alphabetical order
console.log(friendsNames);

console.log("These are my friends!");

for (let i = 0; i < friendsNames.length; i++) {
    console.log(friendsNames[i]);
}