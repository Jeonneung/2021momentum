const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //string constructor (string을 얻을 수 있다.)
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000);

//interval: '매번' 일어나야 하는 무언가.setInterval 함수로 실행되며, 두 개의 인자(실행하는 함수, 실행하는 시간 간격(milisecond 단위))를 받는다.
//timeout: 일정 시간이 흐른 후 (한번만)실행되는 함수.
//pad-: 특정 조건일 때 문자를 추가하는 함수. 두 개의 인자(특정 조건에 충족하는 글자 개수, 추가하는 숫자)
//*padstart는 시작 부분에 문자를 추가하고, padend는 끝 부분에 문자를 추가한다.