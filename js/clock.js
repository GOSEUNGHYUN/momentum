const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date(); //Date object 생성
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

//"1".padStart(2,"0"); 두자리수가 아닐 경우 앞쪽에 문자"0"을 추가하는 함수
//"1".padEnd(2,"0"); 뒤쪽에 문자를 추가한다.
