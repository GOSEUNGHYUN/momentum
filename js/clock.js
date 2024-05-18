const clock = document.querySelector('h2#clock');

function sayHello() {
    console.log('Hello');
}

//interval : '매번' 일어나야 하는 무언가를 의미한다. ex) 매2초
//setInterval(실행하고자하는 function, function의 간격을 몇 ms(milliseconds)로 할 지);
setInterval(sayHello, 5000);
