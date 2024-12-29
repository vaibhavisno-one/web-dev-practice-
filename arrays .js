/*let fruits = ["apple", "banana", "orange"];

fruits[1] = "kiwi";//banana will be replaces by kiwi

fruits.push("mango", [1]);
fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
fruits.sort().reverse();
console.log(fruits);
// advanced for loop
for(let fruit of fruits){
    console.log(fruit);
}
*/
//...............................................................................................
//spread operator  (...alows an array or string to be expanded into sepeaarate elments)
/*let numbers = [1,2,3,4,5];
let max =Math.max(...numbers)

console.log(max);

let min =Math.min(...numbers)
console.log(min);


let username = "vaibhav";
let letters = [...username].join("-0");
console.log(letters);

let fruits = ["apple", "banana", "orange"];
let newFruits = ["mango", ...fruits, "kiwi"];
console.log(newFruits);
*/
//.....................................................................................

// rest parameter (...allows a function to work with a variable number of arguments by bundeling them together into an array)


// function openFridge(...foods){
//     console.log(foods);
// }




// const food1 ="piza";
// const food2 = "burger";
// const food3 = "noodles";
// const food4 = "chowmein";
// const food5 = "biryani";

// openFridge(food1,food2,food3,food4,food5);


// function sum(...numbers){
//     let result =0;

//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }

// const total = sum(1,2,3,4,5,6,8);
// console.log(total);