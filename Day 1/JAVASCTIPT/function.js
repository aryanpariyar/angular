// Functions in JavaScript:
// A javascript function is a block of code designed to perform  a particular task.



// => Function Definition:
// Before we use a function we need to define it.

// A function definition is aslo called function declaration or function statement.
// Consists of the function keyword, followed by:

// The name of the function .
// A list of parameters to the function, enclosed in parenthesis and seperated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets , {....}


// syntax
    // function functionName(){
    //     //statements
    // }



    // var a = 10;
    // var b = 20;
    // let sum = a + b;
    // console.log(sum);

console.log("Function: Definition ");
    function sum1(){
        var c = 20, d = 30;
        var total = c + d;
        console.log(total);
    }
    // console.log
    
    // =>Calling  Function:
    // Defining a function doesnot execut it 
    // A JavaScript function is executed whwn "something " invokes it (call it)
   
console.log("Function: Call");
   
    function sum(){
        var c = 20, d = 30;
        var total = c + d;
        console.log(total);
    }

    sum();

    // => Function Parameter:
console.log("Function:Parameters");

    function sum3(e, f){
        var total = e + f;
        console.log(total);
    }

    sum3();
    sum3(20, 30);
    sum3( 90, 10);

// What is the difference between function Parameter v/s function Arguments?

// => Functions Paramets are the names listed in the function definition.
// => Functions Argumentsw are the real value passed in to the function.


// => Why Functions?

// You can reuse code: Define the code once, and use it many times
// you can use the same code many times with different arguments to 
// produce different results.

// OR

// A function is a group of reusable code which can be called anywhere
// in your program,This eliminates the need of writing the same code
// again and again,



// => Function Expressions:
// "Function expression simply means create a function and put it into the variable."

console.log("Function: Expressions");

function sum4(a,b){
    var total = a+b;
    console.log(total);
}

var myExpression = sum4(3,9);
myExpression;


// => Return Function:
 // When JavaScript reaches to the return statement,the function 
 // will stop executing.

 // Function Often Compute a return value.
//  The return value is returned back to the caller.
console.log("Function: Return");

function sum5(a,b)
{
    return total = a + b;
}
 var returnKey  =sum5(40,80);
 console.log(returnKey);

 // =>Anonymous Function:
 // A Function Expression is similar to and has same the syntax as the 
 // function declaration one can define "named" function expression (where the name
//  of the expression might be used in the call stack for example. )
// or "anonymous" function expressions.

console.log("Anonymous Function:")

var anyFun = function(a,b)
{
    return total = a+b;
}
console.log(anyFun(90,110));
var summ = anyFun(45,5);
console.log("The sum of two number is "+ anyFun(49,6));
console.log("The sum of two number is "+ summ );