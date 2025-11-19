const meowBtn = document.getElementById('meowBtn');
const message = document.getElementById('message');
const catImg = document.getElementById('cat');
const meowSound = document.getElementById('meowSound');

// Функция для случайного текста
function randomMeowText() {
    const meows = ['Мяу!', 'Мррр...', 'Мяууу 💖', 'Шшш... кусь!', 'Хочу мягкий корм!'];
    return meows[Math.floor(Math.random() * meows.length)];
}

// Воспроизведение звука
function playMeow() {
    meowSound.currentTime = 0;
    meowSound.play();
}

// Анимация "куса"
function shakeCat() {
    catImg.classList.add('shake');
    setTimeout(() => catImg.classList.remove('shake'), 500);
}

meowBtn.addEventListener('click', () => {
    message.textContent = randomMeowText();
    playMeow();
    shakeCat();
});

catImg.addEventListener('click', () => {
    message.textContent = 'Кусь! 😼';
    playMeow();
    shakeCat();
});

// Добавляем стиль для анимации
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}
.shake { animation: shake 0.3s; }
`;
document.head.appendChild(style);
