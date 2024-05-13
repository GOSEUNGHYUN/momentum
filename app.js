//style작업에 적합한 도구 : CSS
//animation에 적합한 도구 : JavaScript

const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    const clickedClass = 'clicked';

    //전 강의 코드의 문제점 : class name 초기의 sexy-font 값이 사라진다.
    //특정한 class name만 변경할 수 있는 방법
    if (h1.classList.contains(clickedClass)) {
        //clickedClass가 h1의 classList에 포함되어 있는지?
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener('click', handleTitleClick);
