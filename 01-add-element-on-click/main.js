const button = document.querySelector('button');
let counter = 0;

button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.textContent = ++counter;
  document.body.appendChild(div);

  if (counter % 5 === 0) {
    div.className = 'circle';
  }
});

const listBtn = document.querySelector('#list');
const ul = document.createElement('ul');
document.body.appendChild(ul);
let liNumber = 1;

listBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `${liNumber}`;
  ul.appendChild(li);

  if (liNumber % 3 === 0) {
    li.style.fontSize = '26px';
  }

  liNumber += 2;
});
