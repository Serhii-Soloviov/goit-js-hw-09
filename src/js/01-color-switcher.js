
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector(' [data-stop]'),
  bodyEl: document.querySelector('body'),
};
let timeoutId = null;
let isActive = true;

refs.startBtn.addEventListener('click', () => {
  timeoutId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 500);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timeoutId);
  timeoutId = null;
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
});