// async code

const { isRejected } = require("@reduxjs/toolkit");

 function func1(callback){
     setTimeout(() => {
         console.log("func1");
         callback();
     }, 2000);
 }

 function func2(){
     console.log("func2");
 }

 //.....................................................................ERROR handeling....................................................................

 //Error = an object that is created to represent a problem that occur 
 //        often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error 
// catch { } = catch and handle any thrown error from try { }
// finally { } = (optional) Always exeecutes . used mostly for clean up ex. close files ,close connections release resources 


// try {
//     console.log(x);
// }
// catch(error){
//     console.error(error);

// }
// finally{
//     //close files
//     //close connection
//     //release resources
//     console.log("clean up and this always execute");
// }

// console.log("code after error");

//........................OR...............................

// const divident = window.prompt("Enter a dividend");
// const divisor = window.prompt("Enter a divisor");

// const result = divident / divisor;

// try{
//     const divident = Number(window.prompt("Enter a dividend"));
// const divisor = Number(window.prompt("Enter a divisor"));

// if (divisor == 0){
//     throw new Error("Divisor cannot be zero");
// }
// if (isNaN(divident) || isNaN(divisor)){
//     throw new Error("Divident and divisor must be numbers");
// }


// const result = divident / divisor;
// console.log(result);
// }
// catch(error){
//     console.error(error);
// }


//......................................................Promises.................................
// Promise = an object that manages async operations. 
        //   Wrap a promise object arround {async code} 
        //"I promise to return the value"
        // Pending -> Resolved Or Rejected
        //new Promise((resolve, reject) => {async code}); 


// if we use Promise then we dont need callback and callback hell will



// DO these Chores in Order

//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH




function walkDog(callback){

    setTimeout(() => {
        console.log("walk the dog");
        callback();

    },2000);


}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("clean the kitchen");
        callback();
    },3000);
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log("take out the trash");
        callback();
    },1000);
}


//callback hell

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("done");
        });
    });
})



//WITH PROMISES...........................

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            // reject("dog did not walk");
            if (dogWalked) {
                resolve("walk the dog");
            } else {
                reject("dog did not walk");
            }
        }, 2000);
    });
}

function cleanKitchen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("clean the kitchen");
        }, 3000);
    });
}

function takeOutTrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("take out the trash");
        }, 1000);
    });
}

// calling


walkDog()
    .then((value) => {
        console.log(value);
        return cleanKitchen();
    })
    .catch((error) => {
        console.error(error); // Catch error for walkDog()
        return cleanKitchen(); // Continue with cleanKitchen() even if walkDog fails
    })
    .then((value) => {
        console.log(value);
        return takeOutTrash();
    })
    .then((value) => {
        console.log(value);
        console.log("done");
    });

         