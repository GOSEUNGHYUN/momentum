const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
// --> const loginInput = document.querySelector("#login-form input");
// --> const loginButton = document.querySelector("#login-form button");
// --> 두 줄로도 가능

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === '') {
        alert('Please write your name');
    } else if (username.length > 15) {
        alert('Your name is too long');
    }
}

loginButton.addEventListener('click', onLoginBtnClick);
