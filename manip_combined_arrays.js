// combine arrays together and then minuplate in some way with a method
let arr1 = ["eyes", "ears", "mouth"];
let arr2 = ["nose", "chin", "teeth"];

arr1.push("eyelashes"); // noticed that if i wrote this after the creation of arr3, it would not have been inputed with arr3's output.

let arr3 = arr1.concat(arr2); // or let arr3 = [...arr1,...arr2];

arr1.push("eyebrows"); // only gets inputed to arr1 specifcally and not included in new arr3 output

console.log(arr3);
console.log(arr1);

arr3.pop(); //putting a method before the for loop for it to actually to take effect in the for loop

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
} // putting the .pop() method makes a undefined object