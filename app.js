const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
// --> const loginInput = document.querySelector("#login-form input");
// --> const loginButton = document.querySelector("#login-form button");
// --> 두 줄로도 가능

function onLoginBtnClick() {
    //console.dir(loginInput); 어떤 property에 값이 들어 있는지 확인하는 방법
    console.log('hello,', loginInput.value); //문제점 : 콘솔에 값을 입력하지 않아도 hello가 나온다.
}

loginButton.addEventListener('click', onLoginBtnClick);
