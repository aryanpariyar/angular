    // => Type Insertion in TypeScript  



    // This is the one way of insertation. 
    // let message = "hello";
    // let endWithO = message.endsWith('o');
// Here if we set this then when we type message dot(.) then we get all the function 
// the are useful for the string type.
    // Another way


    // But if we declare and assign like this then we can't get any suggection:
    let messaage;
    messaage = 'hello';
    let endWithO = messaage.endsWith('o');


        // Then we have to use string in < string > like this 
        let messagee;
    messagee = 'hello how are you.';
    let endWithU = (<string>messagee).endsWith('u');
    // or  using like this (message as string )
    let message;
message = 'hello how are you dear.';
let endWithR = (message as string).endsWith('r');


// this means if we declare the correect type of the variable at first then we can have all the suggestion regars that.
