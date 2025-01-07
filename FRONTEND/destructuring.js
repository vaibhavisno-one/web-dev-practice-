// destructure= extracting data from an object or an array then assign them to a variable
// 1) object = {}  2)array = []
 const colors = ["red", "green", "blue","black"];

 const [first,second, third, ...extra] = colors;
 console.log(first);    
 console.log(second);    
 console.log(third);    
 console.log(extra);


 const person1= {
    fame: "spongebob",
    lastname:"squarepants",
    age:30,
    favFood:"krabby patty"
}

const person2 ={
    fame: "patrrik",
    lastname:"star",
    age:30,
    
}



// const {fame, lastname, age, favFood = "chips"} = person2;
// console.log(fame);
// console.log(lastname);
// console.log(age);
// console.log(favFood);

///////or in a function//////


function dispalyDetails({fame, lastname, age, favFood = "chips"}){
    console.log(`name: ${fame} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`favourite food: ${favFood}`);

}

dispalyDetails(person2);