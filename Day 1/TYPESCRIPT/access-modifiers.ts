
//  => Access MOdifiers in Typescript:
    
    //        class Point {
    //         x: number;
    //         y: number;

    //         constructor(x?: number, y?: number){
    //             this.x = x;
    //             this.y = y;
    //         }
    //         draw(){
    //             console.log('X: ' + this.x, 'Y: ' + this.y);
    //         }
           
    //     }
    
    //    let point = new Point(); 
          
    //          point.draw(); 

             
    // Here we have point object with the initial cordinates. what if in our program when we initialize a value there 
    // should not change the value of x and y. 

    // here if we want to change the value of x i can do this easy as;
    //  let point = new Point(1,2); 
    //       point.x = 3;
    //          point.draw(); 

    //          HOw to avoid this in some program we need this features 

    //          In object Oriented programming we have something for this called 
    //          Access Modifieres: 
    //          An access modifier is basicaly a keyword which we can apply members of class to avoid the access of these members outside of the class.

    //          In Typescript we have 3 types of access modifiers 
    //             1. Public 
    //             2. Private 
    //             3. Protected
    //         Public and Private are the most common in use and in Typescript by default 
    //         all the members are Public 

    //         NOW to use these access modifier we use these keyword after the fields as; 
    //         Private x : number;
    //         Private y : number;

    //         eg: 

             class Point {
           private x: number;
           private y: number;

            constructor(x?: number, y?: number){
                this.x = x;
                this.y = y;
            }
            draw(){
                console.log('X: ' + this.x, 'Y: ' + this.y);
            }
           
        }
    
       let point = new Point(1,2); 
          
             point.draw(); 

            //  now we cannot access the x and y outside of the class.