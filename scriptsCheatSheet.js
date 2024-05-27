/* CLASS EXIST IN JS, AND EACH CLASS CAN HAVE METHODS.
 */
const person = {
    firstname: "john",
    lastName: "Doe",
    age: 50
  } 
  

  /* The document file - describes the html file, hence includes the properties of the html file such as bg color etc.. */
 /* JAVA SCRIPT TO DO LIST*/
 
 /* 1) TO SUM UP HOISTING */
 /* 2) TO SUM FOR FOR(OF) */
 /* 3) TO SUME DOLLAR SYNTAX */
 /* 4) WE WILL RARELY USE SYMBOL
    5) TO CONNECT STRING WE WILL USE THE ` ${} SYNTAX NOTATION, NOT THE + OPERATOR.
*/

/* VARIABLES IN JS */
/*
1) we will use only let / const, not var !
2) let: is a block scope variable, it can be updated but not re-declared.
3) const: is a block scope variable, it can neither be updated nor re-declared.
 */


/* JAVASCRIPT HOISTING */
1) Function Declarations: The entire function body is hoisted to the top of the scope, so you can call them before they appear in the code.
2) Function Expressions: Only the declaration of the variable is hoisted to the top of the scope, but not the assignment itself. 
3) Therefore, if you try to call the function before the assignment, you will get a TypeError because the variable is undefined.
5) Understanding this difference is important when writing and understanding JavaScript code, especially when working with functions and the impact of hoisting.
1) Hoisting is the process where variable and function declarations are moved to the top of their scope.
2) var: Declarations are hoisted, but values are not. If you access the variable before the assignment, you will get undefined.
3) let and const: Declarations are hoisted but enter the Temporal Dead Zone (TDZ). Accessing the variable before the declaration will cause a ReferenceError.
4) Functions: Function declarations are fully hoisted, so you can call them before they appear in the code. In contrast, function expressions are not fully hoisted,
   and accessing them before the assignment will cause a TypeError.
   This is an important feature to know and understand how it affects the order in which JavaScript code is executed.













