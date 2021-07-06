const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; /*일반적으로 string만 포함된 변수는 대문자고 표기하고 string을 저장하고 싶을 때 사용한다.*/
const USERNAME_KEY = "username"; 

function onLoginBtnClick(){
    /*console.log(loginInput.value);*/ //input에 적은 value를 console.log 해준다.
    /*if (username === "") {
        alert("Please write your name");
    }
    else if(username.length > 15) {
        alert("Your name is too long");
    } js로 일일이 유저를 확인하는 것도 좋지만, html의 기능을 이용하는 것이 훨씬 좋다. (required, maxlength 등)*/
    const username = loginInput.value;
    console.log(username);
}
function onLoginSubmit(event){
    event.preventDefault(); //기본 행동(기본적으로 발생하는 행동)이 발생되지 않도록 막는 함수. event object 중 하나이며, 이 함수를 불러오면 디폴트 행동이 발생되지 않는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username); /*localstorage의 setItem, removeItem, getItem 을 이용해 작은 DB를 사용할 수 있다. */
    paintGreetings();
/*argument는 그 공간만 만들어주면 방금 일어난 event에 대한 정보를 채워넣는다. */
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; /*"Hello" + username; 보다 더 효과적인 방법.(string과 변수를 하나로 합치는 방법.)*/ 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit); //eventlistener 안에 있는 함수는 직접 실행하지 않는다.
/* 브라우저는 이벤트가 발생될 경우 실행될 함수를 호출하고, 브라우저가 함수를 실행시키고 있긴 하지만 event로부터 정보를 받아서 함수를 실행시킨다.
event가 발생할때 함수를 호출하는데, 첫 번째 인자로써 추가적인 정보를 가진 채 호출하게 된다.*/

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
//show form
}
else{ 
   paintGreetings();
//show greeting
}