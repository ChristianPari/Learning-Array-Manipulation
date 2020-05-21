// create and combine arrays in different ways, use for loop to output the outcome in a list
let a = [1, 2, 3];
let b = [4, 5, 6];

let c = a.concat(b); // using concat() method to combine 2 arrays into one
console.log(c); // used this to make sure output of array c was correct

for (d = 0; d < c.length; d++) {
    console.log(c[d]);
} // outputs our new array (c) into a list

let e = [9, 8, 7];
let f = [6, 5, 4];

let g = [...e, ...f]; // another way to combine arrays w/ the spread operator
console.log(g);

for (h = 0; h < g.length; h++) {
    console.log(g[h]);
} // outputs the new array (g) as a list