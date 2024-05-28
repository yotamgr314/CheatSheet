/* CLASS EXIST IN JS, AND EACH CLASS CAN HAVE METHODS.
 */
const person = {
    firstname: "john",
    lastName: "Doe",
    age: 50
  } 
  

  /* The document file - describes the html file, hence includes the properties of the html file such as bg color etc.. */
 /* JAVA SCRIPT TO DO LIST*/
 
 /* 2) TO SUM FOR FOR(OF) */
 /* 3) TO SUME DOLLAR SYNTAX */
/* 5) TO CONNECT STRING WE WILL USE THE ` ${} SYNTAX NOTATION, NOT THE + OPERATOR.
*/

/* VARIABLES IN JS */
/*
1) we will use only let / const, not var !
2) let: is a block scope variable, it can be updated but not re-declared.
3) const: is a block scope variable, it can neither be updated nor re-declared.
 */



/* JAVASCRIPT HOISTING */

1) Hoisting is the process where variable and function declarations are moved to the top of their scope.

2) Function Declarations: The entire function body is hoisted to the top of the scope, so you can call them before they appear in the code.

3) Function Expressions: Only the declaration of the variable is hoisted to the top of the scope, but not the assignment itself. 
   Therefore, if you try to call the function before the assignment, you will get a TypeError because the variable is undefined.

4) var: Declarations are hoisted, but values are not. If you access the variable before the assignment, you will get undefinederror.

5) let and const: Declarations are hoisted but enter the Temporal Dead Zone (TDZ). Accessing the variable before the declaration will cause a ReferenceError.

6) Functions: Function declarations are fully hoisted, so you can call them before they appear in the code. In contrast, function expressions are not fully hoisted,
   and accessing them before the assignment will cause a TypeError.


   /* DEFAULT PARAMETERS TO A FUNCTION */
   function greet(name = "Guest", greeting = "Hello") {
      console.log(greeting + ", " + name + "!");
  }
  
  /* SPREAD OPERATOR  */
  const numbers = [1, 2, 3]; /* // a lows for copying, merging, and adding arrays and objects in a simple and elegant way, as well as passing arguments to functions conveniently. */
  const moreNumbers = [0, ...numbers, 4];
  console.log(moreNumbers); // Output: [0, 1, 2, 3, 4]
  

/* REST FUNCTION PARAMETER */
  function sum(...numbers) /*The Rest Parameter in a js function (...) allows you to gather multiple function arguments into a single array. This is useful when you don't know in advance how many arguments will be passed to the function or when you want to work with an indefinite number of arguments*/
  {
   return numbers.reduce((total, current) => total + current, 0);
  }
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

/* DYNAMIC KEYS */
function createObject(key, value) { /* his is particularly useful when the property name is not known ahead of time but is computed at runtime Computed property names allow you to use an expression enclosed in square brackets [] to define the key of an object property.*/
   return {
       [key]: value
   };
}

const obj = createObject("age", 30);
console.log(obj); // Output: { age: 30 }




/* IIFE - IMMIDETALY INVOKED FUNCTION */

let a = 8; 
let b = 2; 
(function () {
a = 10; 
b = 5; 
console.log("a+b = ", a +b); 
} )();

console.log("a = ", a); 
console.log("b = ", b); 


/* a and b Declared outside of any function or block --> hence we can access them and modify them within any function in our code.
our function is an IIFE, which means it is invoked immediately after it is defined.
*/




/* THIS  */
/* refers to the object that is currently executing the code. The value of this varies depending on the context in which it is used:*/

/* 1) Global Context: In the global context (outside of any function or object), this refers to the global object. In a browser, this is window. */

console.log(this); // In a browser: window

/* 2) Function Context: Inside a regular function, this refers to the object that called the function. */

function show() {
   console.log(this);
 }
 show(); // In the global context, this will refer to the global object (window in a browser)

 /* When the function is called as a method of an object:*/

 const obj = {
  name: 'John',
  show: function() {
    console.log(this);
  }
};
obj.show(); // this refers to obj

/* 3) Arrow Functions: Used in anonymous functions only!!.
● Important! Unlike a regular function, an arrow function does not have its own internal scope ---> This means inner this = outer this.
● If the function receives one parameter, you can omit the parentheses. In all other cases, parentheses are required.
● If the function has one statement, you can omit the curly braces. In all other cases, curly braces are required.
● The arrow must be on the same line as the declaration, the function body can be on the next line.. */

const obj = {
   name: 'John',
   show: function() {
     const arrowFunc = () => {
       console.log(this);
     };
     arrowFunc(); // this refers to obj
   }
 };
 obj.show();
 
/* 4)  Constructor Context: When using the new keyword to call a function, this refers to the new object being created.*/
function Person(name) {
   this.name = name;
 }
 const person = new Person('John');
 console.log(person.name); // John
 

/* 5)  Class Methods: Inside class methods, this refers to the instance of the class.*/
 class Person {
   constructor(name) {
     this.name = name;
   }
   show() {
     console.log(this.name);
   }
 }
 const person = new Person('John');
 person.show(); // John
 

 /* CONCATENATION OF STRINGS WITH VARIABLES USING TEMPLATE STRINGS */
 console.log(`my name is ${name} and i am ${age} years old`);


 /* THE DOCUMENT OBJECT */

/* the document object describes the HTML document, hence ht will obtain its properties, such as back ground color --> document.bgColor*/


/* DIFFERENT TYPES OF FUNCTIONS IN JS */
/* 
1) Function Declaration
   i) Use Case: When you need to define a reusable function that you can call anywhere in your code after the declaration.
   ii) Description: A traditional way to define a function with a name that can be called from anywhere in the code after the interpreter has seen the declaration.
*/
function sayHello()
{
    console.log("Hello!");
}

/* 1) Function Expression
   i) Use Case: When you want to define a function and assign it to a variable, especially useful for passing functions as arguments or assigning them as object properties.
   ii) Description: Another way to define a function where the function is defined as part of assigning a value to a variable.
   iii) the variable sayHello holds a reference to the function, not just the value which the function returns,
        --> hence when wanting to call the function again - we can do so by calling sayHello();
 */

// Function Expression
const sayHello = function() {
   console.log("Hello!");
};

// Calling the function
sayHello();


/* Arrow Function
 i) Use Case: Using shorter syntax the "->" replaces "function" in the syntax, handles the "this" diffrently in contrast to other functions. 
    In a regular function, the value of this is determined by how the function is called. It can change depending on the context of the call.
    This is the main difference and it makes arrow functions particularly useful for maintaining the context of this within callbacks and nested functions.









 */

// Arrow Function
const sayHello = () => {
   console.log("Hello!");
};

// Calling the function
sayHello();


/* Anonymous Function
   i) Use Case: Defining a function on the fly, often used as arguments to other functions or for immediate execution, we call her after her intilization. 
 */
// Anonymous Function assigned to a variable
const sayHello = function() {
   console.log("Hello!");
};

// Calling the function
sayHello();

// Anonymous Function used as a callback
setTimeout(function() {
   console.log("Hello after 1 second!");
}, 1000);


/* IIFE (Immediately Invoked Function Expression)
i) Use Case: Executing code immediately and creating a local scope to avoid global namespace pollution.
 */
// IIFE

(function() {
   console.log("Hello!");
})();

// Another IIFE with parameters
(function(name) {
   console.log("Hello, " + name + "!");
})("World");


/* WE CAN CREATE OUR OWN OBJECTS AND WORK WITH THEM  */
let songObj = {
   amount: 55,
   private: true,
   country: "israel",
   singers: ["zoher", "arik", "aviv"]
};
songObj.singers[2] = "shlomi" /* Setts */

/* USING JS TO MODIFY EXISTING HTML TAG STYLE */
/*  i) every object/tag has a style, which holds the styling properties of the object. 
   ii) for example : document.getElementById("Word").style.color = "blue;"

 When we talk about a "tag-object" in JavaScript, we are referring to an HTML element present in our HTML document. Each such element has a style object,
 which allows access to and modification of the element's CSS properties directly from JavaScript.
 Let's say we have an HTML element with an ID of Word:
*/
<p id="Word">Hello, World!</p>
/* Using JavaScript, we can change the text color of this element to blue like this: */
document.getElementById("Word").style.color = "blue";
/* Explanation:

i) document is an object that represents the entire HTML document.
ii) getElementById("Word") is a function that returns the element with the ID Word.
iii) style is a property of the element that holds all its CSS properties.
iiii) color is one of the CSS properties within the style object.
iiiii)"blue" is the new value we assign to the color property.
 */
/* By accessing the style object of an HTML element, we can modify its CSS properties directly from JavaScript. This provides greater flexibility in dynamically styling web pages
   and making changes at runtime without needing to reload the page.*/

/* DOM */
/* The Document Object Model (DOM) is a programming interface that allows access and modification of HTML and XML documents in a hierarchical tree structure. Each element, tag, attribute, and text in the document is represented as a node in this tree, enabling scripts like JavaScript to access and manipulate them.

DOM Structure:
When a browser loads a webpage, it parses the HTML code and creates a DOM tree structure describing the relationships between elements on the page. This tree starts from the root, called 'document,' and branches out to nodes describing the page's elements and structure.

Accessing elements: JavaScript functions like getElementById, getElementsByClassName, and querySelector can be used to access specific elements on the page.
Modifying content and style: You can change the text, attributes, and styles of existing elements using DOM functions and properties.
Adding and removing elements: New elements can be added to the DOM tree, or existing elements can be removed.
Event handling: You can define responses to events like button clicks or changes in input field content.
The DOM is a crucial tool in modern web development, enabling dynamic and interactive web pages.
 */

/* EXAMPLES FOR DOM METHODS */
let element = document.getElementById("myElement"); /* returns the html element with the given id */

let element = document.querySelector(".myClass"); /* returns the first html element with the given selector */

let elements = document.querySelectorAll("p"); /* returns a static list of all the elements which fits to the given selector */

let button = document.getElementById("btn"); /* creates an מאזין to an event of a certain type to an element */
button.addEventListener("click", function() {
    alert("Button was clicked!");
});

function handleClick() { /* removes a מאזין to a certain event from an element */
   alert("Button was clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

let element = document.getElementById("myElement"); /* assign a new value to an html tag */
element.innerHTML = "Hello World!";

let element = document.getElementById("myElement"); /* assigns a new value to an html tag and all its childrens  */
element.textContent = "Hello World!";

let element = document.getElementById("myElement"); /* assigns a new css value to an html element. */
element.style.color = "red";

document.getElementById("myButton").onclick = showAlert; /* on click is a dom method which detects when the element has been clicked by the user, showAlert is a function i implemented. */


/* EVENTS */
/* 1) an even is created due to a trigger */




