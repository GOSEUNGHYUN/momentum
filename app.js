const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//isNaN ? (NaN)true : (NotNaN)false

if(isNaN(age)){
    console.log("Please write a number");
}else{
    console.log("Thank you for writing your age.");
}