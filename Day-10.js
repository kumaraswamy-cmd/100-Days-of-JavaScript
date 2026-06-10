//using pop

let ourarray = [1, 2, 4, 4 , 55 ];
let removedfromarray = ourarray.pop();
console.log(ourarray);
console.log(removedfromarray);

//using shift
let firstremovedarray = ourarray.shift();
console.log(firstremovedarray);

//using unshift 
ourarray.unshift("Kumar");
console.log(ourarray);


//shopping list 

let myshoppinglist = [["Potato" , 2 , "kg"] ,  ["Onions" , 5 , 'kg'] , ["Milk " , 2 , " Litre"]];
console.log(myshoppinglist);



//introductions to the functions 

function ourResuableFunction(){

    console.log("Heyya , World");
}

ourResuableFunction();
