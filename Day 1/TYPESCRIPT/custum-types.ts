// => 8- Interfaces in TypeScript // Custom Types in TypeScript:

// Lets Draw the fucntion :
let drawPoint1 = (x,y) => {
    // ...
}

// Here we don't have any issue because we just have 2 parameters.
// What if we have many parameters like 10 and more then this is difficult for us to 
// configure this.
// To configure this types of problem we can use group of parameters means we can 
// encapuate the parametersand make an Object, insted of passing single single parameters
// we can pass Point Object here as:
//   Lets Draw the fucntion :
let drawPoint2 = (point) => {
    // ...
}
// NOw we can simple call the function as:
drawPoint2({
    x:1,
    y:2
})
// Thsi is much cleaner synatx.

// The point can hold as many as parameters in it,
// However here is also a problem occurs 
//  drawPoint({
//     name:'Aryan',
//     y:
// })
// We should have only and only x and y parameters should execute here not any other .
// Here if we put value of x as string the code should give compile time error to us 
// but there is no any error 
// NO to slove this problem we have to solutions 
// The first is inline  annotation:
 let drawPoint4 = (point :{x:number,y:number}) => {
    // ...
}

// Here we use number as x and y and inside in curley baraces because indicatig the Object.
// This why we are annotated with custom type as number

// In works fine for simple cases but 
// here we includes variable and there might me another point function we don't want
// repeat this process again and again.

// IN those case the better approace is use Interfaces 

// NOw how to define it :

// as: 
    interface Point {
        x: number,
        y: number
    }
//     and now we can use it simply as 
     let drawPoint = (point :Point) => {
    // ...
 }
// This is much cleaner and we can reuse it in multiple times.Just it no any naming 
// convention is used here because we are introducing the custom type and here we use 
// first letter as Capital in an interface.