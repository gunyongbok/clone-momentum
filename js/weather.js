const API_KEYS = 'f0af09cc1d1507108df505e74d0b9acd';
const onGeoOk = (position) => {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log('You live in', lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
        });
};
const onGeoError = () => {
    alert("Can't find you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
