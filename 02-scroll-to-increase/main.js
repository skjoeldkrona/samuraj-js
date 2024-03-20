const square = document.createElement('div');
document.body.appendChild(square);

let size = 10;
let grow = true;

square.style.height = size + 'px';
square.style.width = size + 'px';

window.addEventListener('scroll', () => {
  if (size >= window.innerWidth / 2) {
    grow = !grow;
  } else if (size === 0) {
    grow = !grow;
  }

  if (grow) {
    size++;
    square.style.height = size + 'px';
    square.style.width = size + 'px';
  } else {
    size--;
    square.style.height = size + 'px';
    square.style.width = size + 'px';
  }
});
