// => Templete Litrels (Templete Strings) in JS 
  
// JavaScript Program to print the table of 13.


for ( num = 1; num<= 10; num++){
    let tableof = 13;
    console.log(tableof + " * " + num + " = " + (tableof*num));

}

console.log('Now using Templet String ');

for (numb = 1; numb <= 10; numb++){
    let table = 14;
    console.log(`${table} * ${numb} = ${table*numb}`);
}

// In templet string we use $ sign for putting variable with curly brackets. and other code we use directly. 
// The main benifit of the templete string is we do not use concate time to time. 