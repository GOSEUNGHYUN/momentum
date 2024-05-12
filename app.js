//HTML에서 app.js를 import했다.
//document는 HTML이 app.js를 load하기 때문에 존재하는 것이다.
//그 다음에 browser가 우리가 document에 접근 할 수 있게 해준다.
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
//element의 내부를 보고 싶다면, console.dir()을 사용하면된다.
//내부에 on으로 시작되는 것은 evnet다. (입력을끝내거나,내 이름을 적거나, enter를 누르는 것이 event이다.)
//항목들은 전부 JavaScript object라는 것을 이해하고 넘어가야한다.

title.style.color = "blue";

function handleTitleClick(){
    console.log("title was clicked!");
}

title.addEventListener("click",handleTitleClick); //click event를 listen하고, click evnet가 발생하면 handleTitleClick이라는 function이 동작한다.
//addEventListener() : event를 listen한다.
//JavaScript에 무슨 evnet를 listen하고 싶은지 알려줘야한다.
//내가 직접 실행버튼()을 누르지 않고, js에 이 function이름(handleTitleClick)을 넘겨줘서 유저가 title을 click할 경우에, js가 나 대신 실행버튼을 눌러주게 하는 것이다.
//주의 : argument에 function이름을 넣을 때 괄호를 넣으면 안된다.



//모든 event들을 JavaScript는 listen할 수 있다.