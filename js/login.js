const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('.login-input');
const greeting = document.querySelector('#greeting');

const logiSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = loginInput.value;
    localStorage.setItem('username', username);
    greeting.innerText = `Have a nice day ${username}`;
    greeting.classList.remove('hidden');
};
const getusername = localStorage.getItem('username');
if (getusername === null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', logiSubmit);
} else {
    greeting.classList.remove('hidden');
    greeting.innerText = `Have a nice day ${getusername}`;
}
