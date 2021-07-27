
        // => Object in TypeScript:
        class Point {
            x: number;
            y: number;
            draw(){
                console.log('X: ' + this.x, 'Y: ' + this.y);
            }
            getDistance(another: Point){
                // ...
            }
        }


    //    Here is our Point Class now 
    //    lets declare a variable of this type.

    // let point = new Point();
    // point.x = 1;
    // point.y = 2;
    // point.draw();
        // Here if we want to use x dnd y in draw we should use this keyword as this.x 
    
        // now for accessing the object 
         
        // let point: Point = new Point();

        // but to make the code bit cleaner we use 
       let point = new Point();
            point.x = 1;
            point.y = 2;
            point.draw();

//  There output of this code is : X: 1 Y: 2


// Here Some important Point is that : 
       // The capital Point is the class and the small point is an object
    //    an object is an instance of a Class
