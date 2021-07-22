console.log("Using: var")
// In var we can change the variable value after assigning the one value on it.
// var myName = "Aryan Pariyar";
// console.log(myName);
// myName = "Ramesh Damai";
// console.log(myName);
console.log("Using: let")
// In let we can change the variable value after assigning the one value on it.

// let myName = "Aryan Pariyar";
// console.log(myName);
// myName = "Ramesh Damai";
// console.log(myName);
console.log("Using: const")
// In const we cannot change the variable value after assigning the one value on it.

const myName = "Aryan Pariyar";
console.log(myName);
// myName = "Ramesh Damai";
// console.log(myName);

// var => Function Scope
// let and const => Block scope


// function details(){
//     var myFirstName = "Aryan";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Pariyar";
//         console.log('Inner ' + myLastName );
//         console.log('Inner ' + myFirstName );
//     }
//     console.log('Inner ' + myLastName );

// }
// details();
// When we use var keyword for declaring the variable we can easily access change the date anywhere in the function but in let and const this is not happning.as:
// function details(){
//     let myFirstName = "Aryan";
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "Pariyar";
//         console.log('Inner ' + myLastName );
//         console.log('Inner ' + myFirstName );
//     }
//     console.log('Inner ' + myLastName );

// }
// details();
// When we use let keyword to declare the variable we can access the variable inside he if else
// means if we declare a variable gloabally in function we can access it anywhere inside function but if 
// we declare it insitde in spacefica area like if-else then we can access that outside of the 
// if-else.This is the difference between var and let.

function details(){
    const myFirstName = "Aryan";
    console.log(myFirstName);

    if(true){
        const myLastName = "Pariyar";
        console.log('Inner ' + myLastName );
        console.log('Inner ' + myFirstName );
    }
    // console.log('Inner ' + myLastName );

}
details();
// Here we face the same as the let keyword in const also.
// This is the mean of the Block Scope 

