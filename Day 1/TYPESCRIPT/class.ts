// => Class in TypeScript:
interface Point {
            x: number,
            y: number
        }
        // and now we can use it simply as 
    //     let drawPoint = (point :Point) => {
    //     // ...
    // }
    // drawPoint({
    //     x:1,
    //     y:2
    // })
// Here we use Interfaces to define point of a shape Object.But here is a problem with this 
// implementation , in Object Oriented programming language we have a concept called cohesion
// Cohesion: This means `things related should be part of an one unit, it goes together, this is what 
// we called Cohesion. 

// But here on the top we have interface which define the point of a shape Object and below that 
// we have stand alone function and 
// This is where we have voileted the principle of cohesion.
// So the concept of drawPoint is highly related with the structure of the point, it
// should not be a seperate function and if we are working on a utility function and the chances 
// are hightly we should make another function  as:
let getDistance = (pointA: Point, pointB: Point) => {
// ....
}

// Again we have voileted the cohesion principle.We have two function hanging there seperate from the point object.
// Since these concept are highly related they should be part of an one unit

// In Object Oriented language we called that unit => Class

// Class : Groups Variables (Properties) and functions (methods)  that are highly related.

// In above implementation we cannot  move these function inside interface because inter are
// used for decoration they cannot use for implementation. 

// In another way we cannot have any algorithem to calculated drawPoint and getDistance inside interface.

// But we can declare a fucntion which have no any parameters and no any return type . IN this function we can pass point but 
// there is no need of that because like x and y draw can also have the power of use point directley.
// as:
                        // interface Point {
                        //             x: number,
                        //             y: number,
                        //             draw : () => void 
                        // //         }
// To use cohesion principle we need to ue class keyword instead of interface
// and now we can make a implementation of function inside class and change , with ;  .

class Point {
    x: number;
    y: number;
    draw(){
        // ...
    }
    getDistance(another: Point){
        // ...
    }
}
// Now by this(class) we can have everything about point is in one Class.
// as x , y , and two fucntion draw() and getDistance() in 

// Object Oriented programming we called these variable as a fields and fucntion as method.
//  here we don't want any other fucntion and variable outside from this class.
//  NOw Here is the 

// class Point {
//     x: number;
//     y: number;
//     draw(){
//         // ...
//     }
//     getDistance(another: Point){
//         // ...
//     }}