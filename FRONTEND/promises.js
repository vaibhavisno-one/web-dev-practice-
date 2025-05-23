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


const promise3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("async task 3 done");
        resolve({name:"chai",email:"chai@123"});//taking resolve value
    }, 3000)
})
promise3.then(function(user){
    console.log(user.name);
    console.log(user);
    
    
})
// error handeling..............................
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"vaibhav",email:"vaibhav@123"});
        }else{
            reject("ERROR: something went wrong");
        }
        
        
    }, 4000);
})

promise4.then((user)=>{
    console.log(user);
    return user.username;
})
.then((myusername)=>{    //chaining - jo upar wala then se return hogi wahi yahan par ayegi
    console.log(myusername);
    
}).catch((error)=>{
    console.log(error);//agar error create ho raha ai to catch lagan  hoga
    
}).finally(()=>{
    console.log("finally the promise is done");//ye humesha chalega chahe promise resolve ho ya reject
})


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"javascipt",email:"javascript@123"});
        }else{
            reject("ERROR: JS went wrong");
        }
        
    }, 5000)
})

async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise5();


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

getAllUsers();
//using then and catch
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log('data',data);
    
})
.catch((error)=>{
    console.log(error);
    
})

async function getData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        console.log('data',data);
    }
    catch(error){
        console.log('error',error);
        
    }
}
getData();