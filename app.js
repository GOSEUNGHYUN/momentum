const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
//isNaN ? (NaN)true : (NotNaN)false

if(isNaN(age)||age<0){
    console.log("Please write a real positive number");
}else if(age<18){
    console.log("You are too young");
}else if(age > 50 && age <=80){
    console.log("You should exercise");
}else if(age>80){
    console.log("You can do whatever you want.");
}

/*
else{
    console.log("You can drink");
}
*/