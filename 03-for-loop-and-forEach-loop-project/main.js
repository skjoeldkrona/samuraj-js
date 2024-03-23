const btn = document.querySelector('button');
const list = document.querySelectorAll('ul li');
let size = 10;

// btn.addEventListener('click', () => {
//   list.forEach((li) => {
//     li.style.display = 'block';
//     li.style.fontSize = size + 'px';
//   });
//   size++;
// });

btn.addEventListener('click', () => {
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = 'block';
    list[i].style.fontSize = size + 'px';
  }
  size++;
});
