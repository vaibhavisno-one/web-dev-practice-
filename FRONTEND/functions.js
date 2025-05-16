// // callback  - a function passed as an argument to another function

// hello(goodbye);

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function goodbye(){
//     console.log('goodbye');
// }

// function sum(callback,x,y){
//     let result = x+y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }
// // .............................................BEST EXAMPLE OF CALLBACK FUNCTION..............................................
// function sum(x,y){
//     console.log(x+y);

// }
// function mul(x,y){
//     console.log(x*y);
// }

// function calc(x,y,operator){
    
//     operator(x,y);
// }

// calc(1,2,sum);
// calc(1,2,mul);

// // ..........................................................FOR EACH LOOP..............................................................
// used with functions 
// for each = method used to iterate over the elements of an array and apply a specified function (callback) to each element 

//         //   array .foreach(callback)
//         //   elements, index, array are provided

//         //array.foreach((parameters) => {body})


// let numbers = [1,2,3,4,5];

// numbers.forEach(display); // when the forEach iterator goes to first value 1 then it will call the display function and there the parameter is elements and in console log argument is elments whic takes the value 1

// function display (elements){
//     console.log(elements); 
// }
// numbers.forEach(double)
// function double(elements){
//     console.log(elements*2);
// }

// //OR 

// const fruits = ["apple", "banana", "orange"];
// fruits.forEach((elements)=>{
//     console.log(elements);
// })


// let anotherNum = [10, 20, 30, 40, 50];

// anotherNum.forEach((element, index, array) => {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
// });

// The forEach method always passes these arguments in the same order, no matter what you name the parameters:

// The first argument is always the current element.
// The second argument is always the current index.
// The third argument is always the original array.

// // ..........................................................MAP METHOD..............................................................
// .map() = accepts a callback  and applies that function to each element of an array , the returns a new array 

// , it is important to use return in the callback function for map() because the purpose of the map() method is to create a new array where each element is the result of applying the callback function to the corresponding element of the original array.

// If you don’t include a return statement in the callback function, the function will implicitly return undefined, and the resulting array will consist of undefined values.


// const numbers = [1, 2, 3, 4, 5];

// const squared = numbers.map(square)
// console.log(squared);

// function square(element){
//     return Math.pow(element,2);
// }


// const students = ['spongebob' , 'patrick' , 'squidward' , 'mr krabs' , 'plankton'];

// const upper = students.map(uppercase);
// console.log(upper);
// const lower = students.map(lowercase);
// console.log(lower);
// function uppercase(elements){
//     return elements.toUpperCase();
// }
//  function lowercase(elements){
//     return elements.toLowerCase();
// }


// // .........................................................filter()........................................................
// accepts boolean value
//    .filter() = creates a new array by filtering out elements

// let numbers = [0,1, 2, 3, 4, 5];

// let even = numbers.filter(evenNum);

// console.log(even);

// function evenNum(elements){
//     return (elements % 2 === 0);
// }


// // ............................................................reduce()......................................................

// .reduce() = reduce the elements of an array to a single value.

// const prices = [10, 20,25, 30, 40, 50];
// const total = prices.reduce(sum);

// console.log(`Total: ${total} $`);


// function sum (accumulator, element){
//     return accumulator + element; // whatever the value is returned it stored in accumulator
// }


// const grades = [10, 20, 30, 40, 50];
//  const max = grades.reduce(maximum);
// console.log(`Max: ${max}`);
//  function maximum(accumulator,element){
//     return Math.max(accumulator,element);

//  }

// // .................................................function expressions.................................................

// function declaration = writing down the function
// function add(x, y) {
//     return x + y;
//   }
//   const result = add(2, 3);
//   console.log(result);

// function expressions = function that are stored in a variable 
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(function(element){
//     return Math.pow(element,2);
// })
// console.log(squares);

// // ........................................ARROW FUNCTION........................................................

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((element)=>{return Math.pow(element,2);});
// const cubes = numbers.map((elements)=>{return Math.pow(elements,3);});
// const even = numbers.filter((elements)=>{return (elements % 2 === 0);});
// const odd = numbers.filter((elements)=>{return (elements % 2 !== 0);});
// const total = numbers.reduce((accumulator,element)=>{return accumulator + element;},0);
// const max = numbers.reduce((accumulator,element)=>{return Math.max(accumulator,element);},0);

// console.log(squares);
// console.log(cubes);
// console.log(even);
// console.log(odd);
// console.log(total);
// console.log(max);


