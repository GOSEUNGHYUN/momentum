const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    h1.classList.toggle('clicked'); //#2.8 CSS in Javascript part Three(1)과 같은 원리의 코드
}

h1.addEventListener('click', handleTitleClick);
