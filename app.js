const a = 5;
const b = 2;
//const(constant:상수), 값이 바뀔 수 없다.
//규칙을 알면, 코드가 나중에 뭘 할지 알 수 있다.
let myName = "nico";
//바뀔 수도 있는 variable

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);

//많은 사람들이 const를 기본적으로 사용하고, 만약 variable을 업데이트 하고 싶다면 let을 쓴다.
//오래된 자바스크립트 강좌나 책에서 var을 볼 수 있다. var은 어떠한 규칙도 가지고 있지 않다.

//규칙 : 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var은 쓰지 말 것.