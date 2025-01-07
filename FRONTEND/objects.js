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

// function Car(make , model, year,color){                   //function Car(a , b, c,d){   
//     this.make = make;                                     //    this.make = a;
//     this.model(called by) = model; (value)                                  //    this.model = b;
//     this.year = year;                                     //    this.year = c;
//     this.color = color;                                    //    this.color = d;
//     this.drive = function(){console.log("driving")}        //}  
// }                                                         

// const car1 = new Car("toyota", 'camry', 2024, 'black');
// const car2 = new Car("honda", 'civic', 2023, 'white');
// console.log (car1.model);
// console.log (car2.model);
// console.log(car1);


//.....................................................CLASSES......................................................
// (can be used instead of constructors)class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions 
 //                used in static keyword, encapsulatio, inheritence

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProducts(){       // dont need to write function in class //method
//         console.log(`product name is ${this.name}`);
//         console.log(`product price is ${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         console.log(`total price is${this.price +(this.price*salesTax)}`)
//     }

// }

// const product1 = new Product("mobile", 10000);
// console.log(product1) //constructor active
// // console.log(product1.displayProducts()) //constructor active
// product1.displayProducts(); // function active

// const product2 = new Product("laptop", 20000);
// product2.displayProducts();
// product2.calculateTotal(0.1);

//.....................................................Getters and Setters......................................................

//getters = special methid to make a property readable
//setters = special method to make a property writable

//validate and modify value of a property


// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth; //using an _ tells this a private property and u should not touch it (used for returning to get)
//         }
//         else{
//             console.error("a positive number")
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight; //using an _ tells this a private property and u should not touch it
//         }
//         else{
//         console.error("a positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return this.width * this.height;//ye usse bhi use karlega jo property nahi tha 
//     }
// }


// const rectangle= new Rectangle(3,4);

// rectangle.width= 5; // will get updated
// rectangle.height= 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);