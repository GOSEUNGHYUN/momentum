//style작업에 적합한 도구 : CSS
//animation에 적합한 도구 : JavaScript

const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    const clickedClass = 'clicked'; //"clicked"는 사용자가 정의한 이름이기 때문에 실수할 수 있어서 string을 변수에 넣는게좋다.
    //clickedClass변수는 실수로 잘못 입력했을 경우, 콘솔창에 이 변수가 정의되어있지 않다고 알려준다.
    if (h1.className === clickedClass) {
        h1.className = '';
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener('click', handleTitleClick);
