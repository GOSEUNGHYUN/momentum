const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
//내부에 on으로 시작되는 것은 evnet다. (입력을끝내거나,내 이름을 적거나, enter를 누르는 것이 event이다.)
//console.dir()을 사용해서 내부에 있는 event를 보고 사용 할 때에는 onclick라면 click로 사용해야한다.

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);