// make the work of callback easy
// alert('this is promisse');

// Promises.....................................................

// let prom1 = new Promise((resolve,reject)=>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("chota hai")
        
//     }
//     setTimeout(() => {
//         console.log('yes, i am done');
//         resolve("done");
//     }, 2000);
// })

// prom1.then((a)=>{ // ye promise ka result hai jo resolve kiya gaya hai
//     console.log(a);
    
// })



// hitesh chaudhary.............................................................

// three stages of promise
// 1. pending
// 2. resolved
// 3. rejected

const promise1 = new Promise(function(resolve, reject) {
    //do async task
    // do calls, cryptography. network
    setTimeout(() => {  
        console.log("async task done");
        resolve();
    }, 2000);
})
promise1.then(function(){
    console.log('promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("async task 2 done");
        resolve();  

    },1000)
})

.then(function(){
    console.log('hi');
    
})