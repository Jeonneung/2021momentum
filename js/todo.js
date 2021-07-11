const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON stringify를 이용하면 어떤 코드라도 있는 그대로 string으로 변환시킬 수 있다.
}

function deleteToDo(event){
    //path를 통해 어떤 element의 버튼이 클릭되었는지 알 수 있다.
    //target을 통해 element의 정보를 얻을 수 있다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //forEach로 실행되어 각각의 요소에 id를 부여한다.
    const span = document.createElement("span");
    span.innerText = newTodo.text; //span의 텍스트는 handle...함수에서 온 newToDo 텍스트가 된다.
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li는 span이라는 자식을 갖는다.
    li.appendChild(button);
    toDoList.appendChild(li); //append는 맨 마지막에 넣어져야 한다.
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 저장(비우기 전의 값)
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); //입력값을 함수에 넣어 호출
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //string을 array로 변환시킨다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //array의 각각에 함수를 실행한다.(paintToDo를 parsedToDos 배열의 요소마다 실행한다.)
}

/* function filter(item){ //질문을 던져서 array에 item을 남겨둘지 묻는다.(false를 반환하면 지운다.) return id !== (지우고 싶은 todo의 id) filter function은 새 array를 만들어 작업한다.
    return item !== 3 //1 !== 3 → true 반환  
}*/