// this =  reference to the object where THIS is used 
//         (this object depends on the immediate context)
//         person.name= this.name

// does not work for arrow functions

// const person1 = {
//     name: "vaibhav",
//     favFood : "bread",
//     age: 20,
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);//method
//     }
// }

// const person2 = {
//     name :"spongebob",
//     favFood :"krabby patty",
//     age :30 ,
//     sayHello:`hello i am ${this.name} and i am ${this.age} years old`

// }

// console.log(person1.sayHello());
// // person1.sayHello();
// // person2.sayHello();
// console.log(person2['sayHello']);

//....................................................CONSTRUCTORS.................................................
// CONSTRUCTORS = special method for defining the properties and methods of object

function Car(make , model, year,color){                   //function Car(a , b, c,d){   
    this.make = make;                                     //    this.make = a;
    this.model = model;                                   //    this.model = b;
    this.year = year;                                     //    this.year = c;
    this.color = color;                                    //    this.color = d;
    this.drive = function(){console.log("driving")}        //}  
}                                                         

const car1 = new Car("toyota", 'camry', 2024, 'black');
const car2 = new Car("honda", 'civic', 2023, 'white');
console.log (car1.model);
console.log (car2.model);
console.log(car1);