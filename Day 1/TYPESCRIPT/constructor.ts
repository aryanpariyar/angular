// => Constructor in TypeScript:



// class Point {
//           x: number;
//           y: number;
//           draw(){
//               console.log('X: ' + this.x, 'Y: ' + this.y);
//           }
         
//       }
  
//      let point = new Point();
//            point.x = 1;
//            point.y = 2;
//            point.draw();

    //   Here we have at top Point class and and below initialixe a point object .

    //   This code is little bit verbals because we have 3 lines to create object and put it on a valid state.
    //   and if this object have another property then we do again for that property  and may be few more as:
    //    let point = new Point();
    //        point.x = 1;
    //        point.y = 2;
    //        point.z = 3;
    //        // ..
    //        /// '..
    //           point.draw();
    //   Is that look cleaner exactly not so in object Oriented programming we have the concept of Constructor.

    //   Constructor : Every class can have a Constructor which is directley call when we make instance of that class.
    //   let see how it works: 

    //   class Point {
    //       x: number;
    //       y: number;
    //       draw(){
    //           console.log('X: ' + this.x, 'Y: ' + this.y);
    //       }

    //       constructor(x: number, y: number){
    //           this.x = x;
    //           this.y = y;
    //       }
         
//       }
  
//      let point = new Point();=> error
//          point.x = 1;
//          point.y = 2;
//            point.draw();

//   Here in typeScript we should give the parameters to the object to make it working because in typeScript  we have only one 
//   constructor so 

//    class Point {
//           x: number;
//           y: number;
//           draw(){
//               console.log('X: ' + this.x, 'Y: ' + this.y);
//           }

//           constructor(x: number, y: number){
//               this.x = x;
//               this.y = y;
//           }
         
    //   }
  
    //  let point = new Point(1,2);=> 
    //      point.x = 1;
    //      point.y = 2;
    //        point.draw();
    //        and here we dont want the value of x line and y line so by romoving these we get.

    //           let point = new Point(1,2);=> 
    //           point.draw();

            //   But what if we dont want any parameters in there in object.
            //   soo we should make these parameters option
            //   to make optional to these parameters we should add ? sign next to the constructor parameters. as:

         class Point {
          x: number;
          y: number;

          constructor(x?: number, y?: number){
              this.x = x;
              this.y = y;
          }
          draw(){
              console.log('X: ' + this.x, 'Y: ' + this.y);
          }
         
      }
  
     let point = new Point(); 
        
           point.draw(); 