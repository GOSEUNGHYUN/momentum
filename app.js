const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector('a');

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);
//가끔은 기본 동작을 막아야할 필요가 있고, 가끔은 뭐가 클릭됐는지 어디가 클린됐는지 알고 싶을 때가 있다.
//JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다.
//object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
