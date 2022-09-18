const imgs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];
const todaysImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement('img');
bgImage.classList.add('backgroundImage');

bgImage.src = `background/${todaysImg}`;

document.body.appendChild(bgImage);
