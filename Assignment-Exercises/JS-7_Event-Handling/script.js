const button = document.getElementById('colorButton');
const colors = ['#000000', '#854836', '#FFB22C', '#626F47'];

button.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});
