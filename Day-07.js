 // concatenating strings 

let myName = "Kumar" ;
let myStr = " Hello, my Name is " + myName + ". how are you ?";

console.log(myStr);



//length of the  string 

let firstname = "Kumar";
let firstnamelength = firstname.length ;

console.log(firstnamelength);

let lastname = `Swamy`;
let lastnamelength = lastname.lengthco ;
console.log(lastnamelength);


console.log("my name is "+ firstname + lastname);

let fullname = firstname + lastname ;

let fullnamelength = fullname.length;

console.log("my  full name is b" + fullname);
console.log("my full name length is " + fullnamelength);



//indexing 
//strings are immutable
//strinhd cannot be  modified 
let firstletter = firstname[0];
console.log(firstletter);


//backward location
let lastletter = firstname[firstname.length-1];
console.log(lastletter);


//bracket notation to find the nth- to -last element in a string 

thirdlaastletter = firstname[firstname.length-3];
console.log(thirdlaastletter);

 

//array used to store differeent type of data in one place 

let ourArray = ["Kumar" , 20];
console.log(ourArray);
