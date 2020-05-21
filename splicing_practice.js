// create an array of breakfast foods an splice new items into the array in the 3rd n 4th elements

let breakfast = ["Eggs", "Pancakes", "Toast"];

breakfast.splice(2, 0, "Bacon", "Waffles");
/*
should add Bacon and Waffles between Pancakes and Toast within the array and will not remove any elements b/c
there is a 0 in the remove elements position within the splice method
*/

console.log(breakfast); // it worked!

for (i = 0; i < breakfast.length; i++) {
    console.log(breakfast[i]);
} // this will just list the breakfast items outside of array brackets

// now create a second splice method that outputs the removed elements into the console

let removedFoods = breakfast.splice(1, 1); // this should remove Pancakes from the array

console.log(breakfast); // it worked!

console.log(removedFoods); // should out the removed element which is Pancakes // worked!

// trying to remove an array within an array
let greetings = [
    ["Hi", "Hello"],
    ["Hola", "Aloha"]
];

let removedGreetings = greetings.splice(1, 2);

console.log(removedGreetings);
/*
expected this to be able to remove a specific array element from within an array but this didnt work,
if able to be done please show!!
*/