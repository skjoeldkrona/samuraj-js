// const square = document.createElement('div');
// document.body.appendChild(square);

// let size = 10;
// let grow = true;

// square.style.height = size + 'px';
// square.style.width = size + 'px';

// window.addEventListener('scroll', () => {
//   if (size >= window.innerWidth / 2) {
//     grow = !grow;
//   } else if (size === 0) {
//     grow = !grow;
//   }

//   if (grow) {
//     size++;
//     square.style.height = size + 'px';
//     square.style.width = size + 'px';
//   } else {
//     size--;
//     square.style.height = size + 'px';
//     square.style.width = size + 'px';
//   }
// });

const divBar = document.body.appendChild(document.createElement('div'));

let size = 10;
let grow = true;

document.body.style.height = '10000px';
divBar.style.position = 'fixed';
divBar.style.top = 0;
divBar.style.left = 0;
divBar.style.height = size + 'px';
divBar.style.width = '100%';
divBar.style.backgroundColor = 'red';

window.addEventListener('scroll', changeHeight);

function changeHeight() {
  if (size >= window.innerHeight / 2) {
    grow = !grow;
    divBar.style.backgroundColor = 'green';
  } else if (size <= 0) {
    grow = !grow;
    divBar.style.backgroundColor = 'red';
  }

  if (grow) {
    size++;
  } else {
    size--;
  }

  divBar.style.height = size + 'px';
}
