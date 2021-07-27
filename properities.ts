  // => Properties :
            // class Point {

            // constructor(private x?: number,private y?: number){
                        
            //       }
            // draw(){
            //     console.log('X: ' + this.x, 'Y: ' + this.y);
            //       }

            // }

            // let point = new Point(1,2); 
      
            // point.draw()

    // Now this implementation has little problem we can access the private fields. such as x and y
            //  The simple solutin of this is define a method for this privite class because
             // we have prower of access all the members  in class and we cannot access these from the outside of the clas
             // so: 

            //  class Point {

            //     constructor(private x?: number,private y?: number){
                            
            //           }
            //     draw(){
            //         console.log('X: ' + this.x, 'Y: ' + this.y);
            //           }
    
            //           getX(){
            //               return this.x;
            //           }
            //     }
    
            //     let point = new Point(1,2); 
            //     let x = point.getX();
          
            //     point.draw()

    // And  what if we have to pass the value in x then we have to make another method in class as:

    // class Point {

    //     constructor(private x?: number,private y?: number){
                    
    //           }
    //     draw(){
    //         console.log('X: ' + this.x, 'Y: ' + this.y);
    //           }

    //     getX(){
    //           return this.x;
    //           }
    //     setX(value){
    //         if(value<0){
    //             console.log('Please Enter valid value');
    //         }
    //         else{
    //             this.x = value;
    //         }
    //     }


    //         }

    //     let point = new Point(1,2); 
    //     let x = point.getX();
    //     point.setX(10);
  
    //     point.draw()
    // if our program have this type of requirement simple we can use properties 
// IN method we can easily use these like field .
    // such as  


    // class Point {

    //     constructor(private x?: number,private y?: number){
                    
    //           }
    //     draw(){
    //         console.log('X: ' + this.x, 'Y: ' + this.y);
    //           }

    //     get X(){ // method by spacing between 
    //           return this.x;
    //           }
    //     set X(value){ // method by spacing between 
    //         if(value<0){
    //             console.log('Please Enter valid value');
    //         }
    //         else{
    //             this.x = value;
    //         }
    //     }


        //     }

        // let point = new Point(1,2); 
        // let x = point.X;
        // point.X = (10);
        // point.draw()

        // IN pypescript we use camel case for the property but here we have not because of the field soo 
        // by achiving that we can simple make underscore filed as ;
        class Point {

            constructor(private _x?: number, private y?: number){
                        
                  }
            draw(){
                console.log('X: ' + this.x, 'Y: ' + this.y);
                  }
    
            get x(){ // method by spacing between 
                  return this.x;
                  }
            set x(value){ // method by spacing between 
                if(value<0){
                    console.log('Please Enter valid value');
                }
                else{
                    this.x = value;
                }
            }
    
    
                }
    
            let point = new Point(1,2); 
            let x = point.x;
            point.x = (10);
            point.draw()
    