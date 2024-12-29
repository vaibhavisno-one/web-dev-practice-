// callback  - a function passed as an argument to another function

// hello(goodbye);

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function goodbye(){
//     console.log('goodbye');
// }

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function display(result){
    console.log(result);
}

