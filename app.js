function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);


const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
}

console.log(player.name);
player.sayHello("lynn");