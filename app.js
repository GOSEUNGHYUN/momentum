//추가설명

//object
const person = {
    name:"Nico",
    age: 98,
};
console.log(person);

person.sexy = "soon"; //object안에 새 property를 만들 수 있다.
console.log(person);


//function
function plus(potato, salad){ //potato, salad는 data를 받으면 대체되는 place holder(자리표시자)일 뿐이다.
    console.log(potato+salad);
}

plus(5,10);