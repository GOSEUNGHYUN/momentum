const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);
//내부에 on으로 시작되는 것은 evnet다. (입력을끝내거나,내 이름을 적거나, enter를 누르는 것이 event이다.)
//console.dir()을 사용해서 내부에 있는 event를 보고 사용 할 때에는 onclick라면 click로 사용해야한다.

function handleh1Click(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    //document의 body, head, title 중요한 것들은 이렇게 존재한다.
    //나머지 element들은 querySelector()나 getElementById()를 사용해서 가져와야한다.
}

//두가지 방법이 있는데 addEventListener()를 사용하는 것을 선호한다.
h1.onclick = handleh1Click;
h1.onmouseenter = handleMouseEnter;//== h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);