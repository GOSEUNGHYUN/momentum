const title = document.getElementById("title");
//getElementByID()는 HTML에서 id를 통해 element를 찾아준다.

console.dir(title);
//console.log()보다 element를 더 자세하게 보여주는 console.dir()을 사용한다.
//<h1>title 하나에서 많은 것들을 가져올 수 있다.

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);