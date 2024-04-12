// console.log('Hello');
// console.log("Bla bla");

// window.alert('this is an allert');

//Comment
/*
frfrfr
*/

// let fullName = "Vitalii Vital";
// let age = 32;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// // Arithmetics operations
// let students = 30;
// students = students * 2;
// console.log(students);


// User input
// 1. Easy way = window prompt
// let username;
// username = window.prompt("Whot's your username?");
// console.log(username)

// 2. HTML textbox
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }


// Type conversion Number(x)   String(x)  Boolean(x)
// let age = window.prompt('How old are you?');
// age = Number(age)
// age+=1;
// console.log(age, typeof age);


// Const
// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt('Enter the radius');
// radius = Number(radius)
// circumference = 2 * PI * radius;
// console.log(circumference)



// Counter program
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }


// //Random number generator 
// const randomButton = document.getElementById('randomButton');
// const randomLabel1 = document.getElementById('randomLabel1');
// const randomLabel2 = document.getElementById('randomLabel2');
// const randomLabel3 = document.getElementById('randomLabel3');
// const min = 1;
// const max = 6;

// let randomNum;

// getRandomNum = function(max, min){
//     randomNum = Math.floor(Math.random() * max) + min;
//     return randomNum
// }

// randomButton.onclick = function(){
//    randomLabel1.textContent = getRandomNum(max, min);
//    randomLabel2.textContent = getRandomNum(max, min);
//    randomLabel3.textContent = getRandomNum(max, min);
// }


// // IF statements
// let age = 99;

// if(age >= 100){
//     console.log("You are too old")
// }
// else if(age >= 18){
//     console.log("You are old enough")
// }
// else if(age < 0){
//     console.log("You age can't be below 0")
// }
// else{
//     console.log("You mast be 18+")
// }


// // Checked
// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmitCheckbox");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent = `You are subscribed!`;
//     }
//     else{
//         subResult.textContent = `You are NOT subscribed!`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if(mastercardBtn.checked){
//         paymentResult.textContent = `You are paying with MasterCard`;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with PayPal`;
//     }
//     else{
//         paymentResult.textContent = `Chose a paynment method`;
//     }
// }


// Ternary operator = a shortcut to if{} and else{}

// let a =21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon!";
// console.log(greeting)

// let purchaseAmount = 200;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


//Switch Case Default

// let day = 8;

// switch(day){
//     case 1:
//         console.log('It is Monday');
//         break;
//     case 2:
//         console.log('It is Tuesday');
//         break;
//     case 3:
//         console.log('It is Wednesday');
//         break;
//     case 4:
//         console.log('It is Thursday');
//         break;
//     case 5:
//         console.log('It is Friday');
//         break;
//     case 6:
//         console.log('It is Saturday');
//         break;
//     case 7:
//         console.log('It is Sunday');
//         break;
//     default:
//         console.log(`${day} is not a day of a week`)
// }


// let testScore = 74;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = 'A';
//         break;
//     case testScore >= 80:
//         letterGrade = 'B';
//         break;
//     case testScore >= 70:
//         letterGrade = 'C';
//         break;
//     case testScore >= 60:
//         letterGrade = 'D';
//         break;
//     default:
//         letterGrade = 'F';   
// }

// console.log(letterGrade)


// STRING METHODS

// let userName = "Some-Texto-  ";

// console.log(userName.charAt(0))
// console.log(userName.indexOf("o"))
// console.log(userName.lastIndexOf("o"))

// console.log(userName.trim()) // remove whitespases after
// console.log(userName.toLowerCase()) 
// console.log(userName.includes("g"))

// console.log(userName.replaceAll("-", "/"))
// console.log(userName.padStart(15, "0")) // add some symbols to the string


// String Slising

// const someString = "Some String";

// let firstWord = someString.slice(0, 4);
// let secondOne = someString.slice(5);
// let firstChar = someString.slice(0, 1);
// let lastChar = someString.slice(-1);
// console.log(firstWord)
// console.log(secondOne)
// console.log(firstChar)
// console.log(lastChar)

// let firstWord = someString.slice(0, someString.indexOf(" "));
// let secondWord = someString.slice(someString.indexOf(" ") + 1);
// console.log(`first : ${firstWord}, second: ${secondWord}`)


// And = &&  OR = ||  not = !
// == compare if values are equal (!=)
// === compare if values and datatype are equal (!==)



// While loop

// let username = '';

// while(username === ""){
//     username = window.prompt('Enter your name');
// }

// do{
//     username = window.prompt('Enter your name');
// }while(username === "" || username === null)

// console.log(`Hello ${username}`)


/// FOR loop
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }


///////// Number Guessing Game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

// let attemts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
//     guess = Number(guess)

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert(`Number should been between ${minNum} and ${maxNum}`);
//     }
//     else{
//         attemts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN!");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN!");
//         }
//         else{
//             window.alert(`Congratulation!!! The answer was ${answer}. It took you ${attemts} atempts`);
//             running = false;
//         }
//     }
// }
//////////////////

// Function
// function add(x, y){
//     return x +y;
// }



/// ARRAY 
// let fruits = ["apple", "orrange", "banana"];
// // fruits[0] = "coconut";
// // fruits.push("apple");
// // fruits.pop();
// // fruits.unshift("mango");
// // fruits.shift();

// // console.log(fruits);
// // console.log(fruits[0]);
// // console.log(fruits.length);
// // console.log(fruits.indexOf("mango"));

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit);
// }



// spread operator  ...    (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// console.log(maximum);

// let username = "Username my";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "orrange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"]

// // let newFruits = [...fruits];
// // console.log(newFruits);

// let foods = [...fruits, ...vegetables, "eggs", "milk"]
// console.log(foods)



/*
rest parameters = (...rest) allow a function work with
a variable number of arguments by bunding them into an array
 
spread = expands an array into seperate elements
rest = bundles seperete elements into an array
 
*/

// function openFridge(...foods){
//     console.log(foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "Pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// openFridge(food1, food2, food3, food4);


// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(1, 2, 3, 89);
// console.log(`Your total is $${total}`);


// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
// console.log(fullName);



/*
callback = function that is passed as an argument to another function

used to handle asynchronous operations:
1. Reading a files
2. Network requests
3. Interacting with databases
*/

// hello(waight);

// function hello(callback){
//     console.log("Hello");
//     callback();
// }
// function leave(){
//     console.log("Leave");
// }

// function goodbye(){
//     console.log("Goodbye!");
// }
// function waight(){
//     console.log("Waight!");
// }



// sum(displayConsole, 34, 56);

// function sum (callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }



/*
forEach()  = method used to iterate over the elements
 of an array and apply a specified function (callback)
 to each element
 array.forEach(callback)
 element, index, array are provided
*/
 

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function display(element){
//     console.log(element);
// }


// let fruits = ["apple", "orange", "banana", "pear"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }


/*
.map() = accepts a callback and applies that function
to each element of an array, then return a new array
 */
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }

// const students = ["Spongebob", "Patric", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(students);
// console.log(studentsUpper);
// console.log(studentsLower);

// function upperCase(element){
//    return element.toUpperCase();
// }
// function lowerCase(element){
//     return element.toLowerCase();
//  }


/*
.filter() = creates a new array by filtering out elements
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }
// function isOdd(element){
//     return element % 2 !== 0;
// }


// const ages = [16, 17, 18, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// console.log(adults);

// function isAdult(element){
//     return element >= 18;
// }


/*
.reduce() =  reduce the elements of an array
 to a single value
*/
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);

// console.log(total.toFixed(2));

// function sum(acumulator, element){
//     return acumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// console.log(maximum);
// console.log(Math.max(...grades)); 

// function getMax(acumulator, element){
//     return Math.max(acumulator, element);
// }

/*
function expressions = a way todefine functions as 
value or variables
*/

// const hello = function(){
//     console.log("Hello");
// }

// setTimeout(hello, 3000);

// setTimeout(function(){
//     console.log("Hello!!!");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// });
// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });
// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0;
// });
// const total = numbers.reduce(function(acumulator, element){
//     return acumulator + element;
// });

// console.log(total);



/*
arrow functions = a concise way to write function expressions
good for simple functions that use only once
(parameters) => some code
*/

// const hello = (name) => console.log(`Hello ${name}`);
// hello("Bro");

// setTimeout( () => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((acumulator, element) => acumulator + element);

// console.log(total);



/*
object = A collection of related properties and/or methods
Can represent real world objects
object = {key:value,
          function()}
*/
 /* 
 this = reference to the object where THIS is used 
 (the object depends on the immediate context)
 person.name = this.name
 this doesn't work with => arrow function
 
 */

//  const person = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log(`Hi I'm ${this.firstName}`)},
//     eat: () => console.log("I'm eating a crabby patty"),
//  }

//  console.log(person.firstName);
//  console.log(person.lastName);
//  console.log(person.age);
//  console.log(person.isEmployed);
//  person.sayHello();
//  person.eat();



/*
    Constructor = special method for defining the 
    properties and methods of objects 
*/

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");

// console.log(car1.make);
// car1.drive();



/*
    class
*/

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);

// product1.displayProduct();
// console.log(`Total: $${product1.calculateTotal(salesTax).toFixed(2)}`)


/* 
    static = keyword that defines properties or methods that belong
    to a class itself rather than the objects created 
    from the class (class owns anything static, not the object)
*/

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
//     }

//     sayHello(){
//         console.log(`Hello, my name is ${this.username}`);
//     }
// }

// const user1 = new User("Spangebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// console.log(User.userCount);
// User.getUserCount();



/* 
    inheritance = allows a new class to inherit properties and methods
    from an existant class (parent -> child)
*/

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// } 

// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "Nemo";
//     swim(){
//         console.log(`This ${this.name} is swiming`);
//     }
// }

// class Hawk extends Animal{
//     name = "hawk";
//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// fish.swim();



/*
     super = keyword is used in classes to call the constructor or
     access the properties and methods of a parent (superclass)
     this = this object
     super = the parent
*/

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`This ${this.name} moves at speed of ${speed}mph`);
//     }
// } 
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`This ${this.name} is running`);
//         super.move(this.runSpeed);
//     }
    
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);        
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`This ${this.name} is swiming`);
//         super.move(this.swimSpeed);
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`This ${this.name} is flying`);
//         super.move(this.flySpeed);
//     }    
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 10);
// const hawk = new Hawk("hawk", 7, 50);

// console.log(fish.swimSpeed)
// fish.swim();



/*
    getter = special method that makes a property readable
    setter = special method that makes a property writeable

    validate and modify a value when reading/writing a property
*/

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("With must be a positive number");
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }
//     get width(){
//         return this._width.toFixed(1);
//     }
//     get height(){
//         return this._height.toFixed(1);
//     }

//     get area(){
//         return (this._height * this._width).toFixed(1);
//     }
// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = 5;
// rectangle.height = 7;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("First name must be a nin-empty string");
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("Last name must be a nin-empty string");
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be a non-negative number");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
// }

// const person = new Person("Spongebob", "Squarepants", 32);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);



/*
    destructuring = extra values from arrays and objects,
    then assign them to variables in a convenient way
    [] = to perform array destructuring
    {} = to perform object destructuring
*/

// SWAP THE VALUE OF TWO VARIABLES
// let a =1;
// let b = 2;
// [a, b] = [b, a]
// console.log(`a = ${a}, b = ${b}`);

// SWAP 2 ELEMENTS IN ARRAY
// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// ASSIGN ARRAY ELEMENTS TO VARIABLES
// const colors = ["red", "green", "blue", "black", "white"];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor, secondColor, thirdColor, extraColors);

//EXTRACT VALUES FROM OBJECTS
// const person1 = {
//     firstName: "First",
//     lastName: "Last",
//     age: 30,
//     job: "Developer",
// }

// const person2 = {
//     firstName: "Secondperson",
//     lastName: "secondlastname",
//     age: 39,
// }

// const {firstName, lastName, age, job="Unempoid"} = person1;
// console.log(firstName, lastName, age, job);

// DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName, lastName, age, job="Unempoid"}){
//     console.log(firstName, lastName, age, job);
// }

// const person1 = {
//     firstName: "First",
//     lastName: "Last",
//     age: 30,
//     job: "Developer",
// }

// const person2 = {
//     firstName: "Secondperson",
//     lastName: "secondlastname",
//     age: 39,
// }

// displayPerson(person2);

/*
    nested objects = Objects inside of the objects.
        allow you to represent more complex data structures
        Child object is enclosed by a parent Object

        Percon{Address{}, ContractInfo{}}
        ShoppingCart{Kyboard{}, Mouse{}, Monitor{}}
*/

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }

// console.log(person.address.city);



// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.",
//                                             "Bikini Bottom",
//                                             "Int. Waters");

// const person2 = new Person("Patrick", 37, "128 Conch St.",
//                                             "Bikini Bottom",
//                                             "Int. Waters");

// const person3 = new Person("Squidward", 30, "126 C0nch St.",
//                                             "Bikini Bottom",
//                                             "Int. Waters");
// console.log(person1.address.country)                                            



/*
    Array of objects
*/

// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: "orange", color: "orange", calories: 45},
//                 {name: "banana", color: "yellow", calories: 105},
//                 {name: "coconut", color: "white", calories: 159},
//                 {name: "pineapple", color: "yellow", calories: 37},];
// fruits.push({name: "grapes", color: "purple", calories: 62});
// fruits.pop();
// // fruits.splice(1, 2);
// fruits.forEach(fruit => console.log(fruit.name));

// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);

// const maxFruit = fruits.reduce((max, fruit) => 
//                                 fruit.calories > max.calories ?
//                                 fruit : max);
// console.log(maxFruit);


/*
    sort() = method used to sort elements of an array in place.
        sort elements as strings in lexicografy order, not alphabetical
        lexicographic = (alphabet + numbers + symbols) as string
*/

// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// let numbers = [1, 10, 2, 9, 3, 8, 7, 4, 5, 6];
// numbers.sort((a, b) => a - b); // for reverse order .sort((a, b) => b - a)
// console.log(numbers)

// fruits.sort();
// console.log(fruits)


// const people = [{name: "name4", age: 30, gpa: 3.0},
// {name: "name2", age: 37, gpa: 1.5},
// {name: "name3", age: 51, gpa: 2.5},
// {name: "name1", age: 27, gpa: 4.0}];

// //people.sort((a, b) => a.age - b.age); // sort people by age
// people.sort((a, b) => a.name.localeCompare(b.name)); // sort people by name (string)
// console.log(people);



/*
    Shuffle an array
*/
// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// //cards.sort(()=> Math.random() - 0.5); // Not recomended

// //Recomended Fisher-Yates algorithm
// shuffle(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];        
//     }
// }
// console.log(cards);



/*
    Date objects = Objects that contain values that represent dates and times

*/

// const date = new Date();
// console.log(date);

// const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
// const date2 = new Date("2024-01-02T12:00:00Z");

// const date3 = new Date(0);
// console.log(date3);

// const year = date.getFullYear();
// const day = date.getDate();
// console.log(`Year: ${year}`);
// console.log(`Day: ${day}`);


// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");
// if(date2 > date1){
//     console.log("Happy new year!!!");
// }


/*
    closure = A function defined inside of another func,
    the inner func has access to the variables
    and scope of the outher func.
    Allow for private vars and state maintence
    Used frequently in JS frameworks: React, Vue, Angular
*/

// function outer(){
//     let message = "Hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();


// function createCounter(){
//     let count = 0;

//     function increment(){        
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }
//     return {increment, getCount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());


// function createGame(){
//     let score = 0;

//     function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore(){
//         return score;
//     }

//     function printScore(){
//         console.log(`Current score is: ${score}pts`);
//     }

//     return {increaseScore, decreaseScore, getScore, printScore};
// }

// const game = createGame();
// game.increaseScore(50);
// game.decreaseScore(14);
// game.printScore();


/*
    setTimeout() = function in JS that allows you to schedule
        the execution of a function after an amount of time (milisec)
        Times are aproximate (veries based on the workload of JS runtime env.)

        setTimeout(callback, delay);
*/

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(function(){window.alert("Hello")}, 3000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers
// const timeoutId = setTimeout(function(){window.alert("Hello")}, 3000);
// clearTimeout(timeoutId);

//-------------- connected to the buttons

let timeoutId

function startTimer(){
    timeoutId = setTimeout(() => window.alert("You clicked on the button"), 3000);
    console.log("Timer started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Canceled");
}


/*----------------------------------
    ES6 Module = An external file that containsreusable code
        that can be imported into other JS files.
        Write reusable code for many different apps.
        Can contain variables, classes, functions....
        Introduced as part of ECMAScript 2015 update
*/
// import {PI, getArea, getCircumference, getVilume} from './mathUtil.js';

// console.log(PI);
// const corcumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVilume(10);
// console.log(corcumference.toFixed(2) + "cm");
// console.log(area.toFixed(2) + "cm^2");
// console.log(volume.toFixed(2) + "cm^3");

//--------------------------
/*
    asynchronous = Allows multiple operations to be performed concurently without waiting
        Doesn't block the execution flow and allows the program to continue
        (I/O operations, networck requests, fetching data...)
        Hendled with: Callbacks, Promises, Async/Await
*/
// function func1(callback){
//     setTimeout(() => {console.log("Tasc 1");
//                       callback()}, 3000);
// }

// function func2(){
//     console.log("Tasc 2");
//     console.log("Tasc 3");
//     console.log("Tasc 4");
// }
// func1(func2);



//-------------------------------
//      Error handling
//  try{}
//  catch{}
//  finally{}

// try{
//     console.log(x);
// }
// catch(error){
//     
// }
// finally{
//     //CLOSE FILE
//     // CLOSE CONNECTION
//     // RELEASE RESOURCES
//     // eth
//     console.log("This always executes");
// }


// try{
//     const divident = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
    
//     if(divisor == 0){
//         throw new Error("You can't divide by zero!");
//     }
//     if(isNaN(divident) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//     const result = divident / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// console.log("You have reached the end!");



/*
    DOM navigation with JS
    .firstElementChild
    .lastElementChild
    .nextElementSibling (.previousElementSibling)
    .parentElement
    .children
*/

//----------------.firstElementChild----------
// const element = document.getElementById("vegetables");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";


//----------------.lastElementChild----------
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";


// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// })


//----------------..nextElementSibling----------
// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

//----------------..parentElement----------
// const element = document.getElementById("apple");
// const parentElement = element.parentElement;
// parentElement.style.backgroundColor = "yellow";


//----------------..children----------
// const element = document.getElementById("fruits");
// const children = element.children;
// ////children[0].style.backgroundColor = "yellow";
// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "red";
// })


/*
    Add & Change HTML with JS
*/

// --------- Example 1 <h1> -----------
// Create the element
const newH1 = document.createElement("h1");

// Add atributes/properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// append element to dom
// document.body.append(newH1);
//document.body.prepend(newH1);
//  document.getElementById("box1").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// remove element
// document.getElementById("box1").removeChild(newH1);



/*
    Callback Hell = Situation in JS where callbacks are
        nested within other callbacks to the degree 
        where the code is difficult to read. 
        Old pattern to handle asynchronous function.
        Use Promises + async/await to avoid Callback Hell
*/


// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);    
// };
// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// };
// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);
// };
// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500);
// };

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks compleate"));
//         })
//     });
// })


/*
    Promise = An object that manages asynchronous operations.
        Wrap a promise Object around {asynchronous code}
        "I promise to return a value"
        PENDING -> RESOLVED or REJECTED
        new Promise((resolve, reject) => {asynchronous code})
*/

//DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true;

//             if(dogwalked){
//                 resolve("You walk the 🐩");
//             }
//             else{
//                 reject("You did it");
//             }            
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenclean = true;

//             if(kitchenclean){
//                 resolve("You clean the kitchen");
//             }
//             else{
//                 reject("You didn't clean the kitchen");
//             }  
            
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = false;
//             if(trashTakenOut){
//                 resolve("You take out the trash");
//             }
//             else{
//                 reject("You didn't take out the trash");
//             } 
            
//         }, 500);
//     });  
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finish all ypur jobs")})
//          .catch(error => console.error(error));



/*
    Async/await = Async = makes a function return a promise
                  Await = makes an async function wait for a promise

                  Allows you write asunchronous code in a synchronous manner
                  Async doesn't have resolve or reject perameters
                  Everything after Await is placed in an event queue
*/

// async function walkDog(){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true;

//             if(dogwalked){
//                 resolve("You walk the 🐩");
//             }
//             else{
//                 reject("You did it");
//             }            
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenclean = true;

//             if(kitchenclean){
//                 resolve("You clean the kitchen");
//             }
//             else{
//                 reject("You didn't clean the kitchen");
//             }  
            
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = false;
//             if(trashTakenOut){
//                 resolve("You take out the trash");
//             }
//             else{
//                 reject("You didn't take out the trash");
//             } 
            
//         }, 500);
//     });  
// }


// async function doChores(){
//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanCitchenResult = await cleanKitchen();
//         console.log(cleanCitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finished all the chores!");
//     }
//     catch(error){
//         console.error(error);
//     }
    
// };

// doChores();



/*
    JSON 

    JSON.stringify() = convert a JS object to a JSON string.
    Json.parse() = convert JSON string to a JS object
*/

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

// const person = {
//     "name": "Sponjebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["hobbie1", "hobbie2"]
// }; 

// const people = [{
//     "name": "Sponjebob",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
// },
// {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
// },
// {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
// }];

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// const person1 = `{"name": "Sponjebob","age": 30,"isEmployed":true,"hobbies":["hobbie1", "hobbie2"]}`;

// const parsedData = JSON.parse(person1);
// console.log(parsedData);



// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value))
//     .catch(error => console.log(error));





