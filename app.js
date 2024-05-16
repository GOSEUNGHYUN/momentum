const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit(event) {
    //js에서 첫번째argument로, 발생된 event에 대한 정보를 채워준다. 공백은 어떠한 정보도 받지 않겠다는 것이다.

    //submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
    //브라우저는 엔터를 누를 때 새로고침을 하고 form을 submit하도록 되어있다.
    event.preventDefault(); //어떤 event의(브라우저의) 기본행동이든지 발생되지 않도록 막는 function이다.
    console.log(event); //tomato(event)에는 방금 실행된 event 정보가 담겨있다.
    console.log(loginInput.value);
}

loginForm.addEventListener('submit', onLoginSubmit);
