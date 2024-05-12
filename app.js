/* example1, 별로 사용하지 않음
const hellos = document.getElementsByClassName("hello");
console.log(hellos);
*/


//querySelector() : element를 CSS방식으로 검색 할 수 있다. 하나의 element만 반환해준다.
const title = document.querySelector(".hello h1");
//document.querySelector(".hello h1:first-child");
//document.querySelector("#hello"); = document.getElementById("hello");
console.log(title);

//querySelectorAll() : selector 안의 조건에 부합하는 모든 element를 가져다준다.
const title2 = document.querySelectorAll(".hello h1");
console.log(title2);