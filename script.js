const inputMin = document.querySelector('.input-min');
const inputMax = document.querySelector('.input-max');
const rangeMin = document.querySelector('.range-min');
const rangeMax = document.querySelector('.range-max');

inputMin.addEventListener('input', () => {
  rangeMin.value = inputMin.value;
});

inputMax.addEventListener('input', () => {
  rangeMax.value = inputMax.value;
});

rangeMin.addEventListener('input', () => {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  if (min > max) {
    rangeMax.value = min;
  }
  inputMin.value = min;
});

rangeMax.addEventListener('input', () => {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  if (max < min) {
    rangeMin.value = max;
  }
  inputMax.value = max;
});

const progress = document.querySelector('.progress');
const rangeInput = document.querySelector('.range-input');

rangeMin.addEventListener('input', () => {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const percent = ((min - 0) / (max - 0)) * 100;
  progress.style.width = `${percent}%`;
  rangeInput.style.left = `calc(${percent}% - 10px)`;
});

rangeMax.addEventListener('input', () => {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const percent = ((max - min) / (1000 - min)) * 100;
  progress.style.width = `${percent}%`;
  rangeInput.style.left = `calc(${percent}% - 10px)`;
});