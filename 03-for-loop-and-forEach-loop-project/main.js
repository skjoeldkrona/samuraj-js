const btn = document.querySelector('button');
const list = document.querySelectorAll('ul li');
let size = 10;

btn.addEventListener('click', () => {
  list.forEach((li) => {
    li.style.display = 'block';
    size++;
    li.style.fontSize = size + 'px';
  });
});
