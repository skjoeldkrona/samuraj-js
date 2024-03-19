const button = document.querySelector('button');
const body = document.querySelector('body');
let counter = 0;

button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.textContent = ++counter;
  body.appendChild(div);

  if (counter % 5 === 0) {
    div.className = 'circle';
  }
});
