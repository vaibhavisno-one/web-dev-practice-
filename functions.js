// callback  - a function passed as an argument to another function

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
//.............................................BEST EXAMPLE OF CALLBACK FUNCTION..............................................
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

//..........................................................FOR EACH LOOP..............................................................
// used with functions 
//for each = method used o iterate over the elements of an array and apply a specified function (callback) to each element 

//           array .foreach(callback)
//           elemetn, index, array are provided


let numbers = [1,2,3,4,5];


numbers.forEach(display); // when the forEach iterator goes to first value 1 then it will call the display function and there the parameter is elements and in console log argument is elments whic takes the value 1

function display (elements){
    console.log(elements); 
}
numbers.forEach(double)
function double(elements){
    console.log(elements*2);
}

///OR ??????????????????????????
const fruits = ["apple", "banana", "orange"];
fruits.forEach((elements)=>{
    console.log(elements);
})


let anotherNum = [10, 20, 30, 40, 50];

anotherNum.forEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

// The forEach method always passes these arguments in the same order, no matter what you name the parameters:

// The first argument is always the current element.
// The second argument is always the current index.
// The third argument is always the original array.