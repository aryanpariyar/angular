
            //  class Point {
            //     private x: number;
            //     private y: number;
     
            //      constructor(x?: number, y?: number){
            //          this.x = x;
            //          this.y = y;
            //      }
            //      draw(){
            //          console.log('X: ' + this.x, 'Y: ' + this.y);
            //      }
                
            //  }
         
            // let point = new Point(1,2); 
               
            //       point.draw(); 

        // Here we have construcotr in our class 
    //     in constructor we have initial as : 
    //     this.x  = x; and 
    //     this.y = y ; 
    //     this look little but anoying that same name is assignig the in same in 
    //     typeScript we have 
    // mush better written code as : 

    // we can delete these private keyword fields and put privite, public or protected keyword before the parameters in constructors.
    // and the awesome feature is that we dont have to use this.x = x; cox typesctipe auto assign this for as in the same parameter,
    class Point {
      

         constructor(public x?: number,private y?: number){
            
         }
         draw(){
             console.log('X: ' + this.x, 'Y: ' + this.y);
         }
        
     }
 
    let point = new Point(1,2); 
       point.x;
          point.draw(); 