// create an array with 5 words, and you want to capitalize the first letter in each word
let arr = ["monday", "tuesday", "wednesday", "thursday", "friday"]; // created 5 element array of strings
// let arr2 = []; // created an empty array to push the new strings to

// for (let a = 0; a < arr.length; a++) { // a for loop to cycle through the string elements
//     arr2.push(arr[a].charAt(0).toUpperCase() + arr[a].slice(1));
//     //* '.push()', used to push the data within the paranthese into a specific array
//     //* '.charAt()', used to select a specifc character from a string
//     //* '.toUpperCase()', used to convert the string value to uppercase
//     //* '+...slice()', used to select a starting point (start argument) of each string
//     //*     to add to the previous selected string value that was changed to uppercase
//     console.log(arr2[a]);
// }
// console.log(arr2);

for (let a = 0; a < arr.length; a++) {
    //^ console.log(arr[a].charAt(0).toUpperCase() + arr[a].slice(1));
    console.log(arr[a][0].toUpperCase() + arr[a].slice(1)); // shorthand
    //* '.push()', used to push the data within the paranthese into a specific array
    //* '.charAt()', used to select a specifc character from a string
    //* '.toUpperCase()', used to convert the string value to uppercase
    //* '+...slice()', used to select a starting point (start argument) of each string
    //*     to add to the previous selected string value that was changed to uppercase
}