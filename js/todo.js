const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('.todo-input');
const toDoList = document.querySelector('#todo-list');

const TODOS__KEYS = 'toDos';

let toDos = []; // make array to save at localstorage
const saveToDo = () => {
    localStorage.setItem(TODOS__KEYS, JSON.stringify(toDos)); // JSON.stringify() -> 어떤 것도 문자열 형태로 변환해준다.
};

const deleteToDo = (event) => {
    const li = event.target.parentElement; // 클릭된 li들
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
};

// todo list를 만드는 함수
const makeToDo = (newTodo) => {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.fontSize = '20px';
    button.style.marginLeft = '10px';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

const toDoSubmit = (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사하는 것
    toDoInput.value = ''; // 이건 toDoInput.value를 비우는 것이지 newTodo는 그대로 있다.
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }; // object를 받는다 id를 각각의 리스트에 넣어줘서 list's item들을 구별하기 위해서
    toDos.push(newToDoObj); // 위의 배열에 newTodo push
    // input에 값을 입력하고 submit하면 값을 비워주고 입력된 값은 배열에 push 후 저장
    makeToDo(newToDoObj);
    saveToDo(newTodo);
};

toDoForm.addEventListener('submit', toDoSubmit);

const savedToDos = localStorage.getItem(TODOS__KEYS);

if (savedToDos !== null) {
    const parsedToDo = JSON.parse(savedToDos);
    // 그냥 문자열로 된 배열 형태가 아닌 alive array로 바꿔주기
    toDos = parsedToDo;
    parsedToDo.forEach(makeToDo); // forEach는 array에서 사용할 수 있는 함수로 각각의 배열 요소에 무언가를 해주고 싶을때 사용한다. 여기에 makeToDo 함수를 불러와서 alive array로 변환된 것들을 list에 표시한다.
}
