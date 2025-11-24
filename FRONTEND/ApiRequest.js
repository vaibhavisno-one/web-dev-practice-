
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