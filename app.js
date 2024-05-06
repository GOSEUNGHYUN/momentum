
const age = prompt("How old are you?");
//prompt(message,default) : 사용자에게 창을 띄울 수 있게 해주고 유저에게 값을 물어볼 수 있다.
//argument = (string)message, default
//javascript의 코드 실행을 멈추게한다. 답을 들을 때 가지 기다린다.
//-> prompt function을 사용하지 않는 이유, 요즘은 사용하지않는다.

parseInt(age);
//string -> number

console.log(typeof age,typeof parseInt(age));
//타입 확인하기 : typeof variable

console.log(age, parseInt(age));


//age에 숫자가 입력되었다면 number, 문자가 입력되었다면 NaN(Not a Number).
const agee = parseInt(prompt("How old are you?"));

console.log(agee);