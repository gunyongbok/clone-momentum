const timeContainer = document.querySelector('.time');
const dateContainer = document.querySelector('.date');
const timeManager = () => {
    const time = new Date();
    const years = time.getFullYear();
    const months = time.getMonth() + 1;
    const dates = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    dateContainer.innerText = `${years} - ${
        months < 10 ? `0${months}` : months
    } - ${dates < 10 ? `0${dates}` : dates}`;
    timeContainer.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
};
const init = () => {
    timeManager();
    setInterval(timeManager, 1000);
};
init();
