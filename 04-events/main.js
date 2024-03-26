// Solution: change of colour on moousemove event
// document.body.addEventListener('mousemove', (e) => {
//   const clientX = e.clientX;
//   const clientY = e.clientY;

//   document.querySelector('h1').textContent = `${clientX}, ${clientY}`;

//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   const red = (clientX / width) * 100;
//   const green = (clientY / height) * 100;
//   const blue = ((clientX / width) * 100 + (clientY / height) * 100) / 2;

//   document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
// });

// Solution: change of color on click
// document.body.addEventListener('click', (e) => {
//   console.log(e.clientX, e.clientY);
//   if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
//     document.body.style.backgroundColor = 'red';
//   } else if (e.clientX % 2 === 1 && e.clientY % 2 === 1) {
//     document.body.style.backgroundColor = 'blue';
//   } else {
//     document.body.style.backgroundColor = 'green';
//   }
// });

// Alternative solution
// document.body.addEventListener('click', (e) => {
//   console.log(e.clientX, e.clientY);
//   const colour = getColour(e);
//   document.body.style.backgroundColor = colour;
// });

// function getColour(e) {
//   if (e.clientX % 2 === 0) {
//     if (e.clientY % 2 === 0) {
//       return 'red';
//     } else {
//       return 'green';
//     }
//   } else {
//     if (e.clientY % 2 === 0) {
//       return 'green';
//     } else {
//       return 'blue';
//     }
//   }
// }

const div = document.querySelector('div');
let divX = 0;
let divY = 0;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let insideDivX;
let insideDivY;

let drawActive = false;

div.addEventListener('mousedown', (e) => {
  drawActive = !drawActive;
  div.style.backgroundColor = 'grey';
  insideDivX = e.offsetX;
  insideDivY = e.offsetY;
});

div.addEventListener('mousemove', (e) => {
  if (drawActive) {
    divX = e.clientX - insideDivX;
    divY = e.clientY - insideDivY;

    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener('mouseup', () => {
  div.style.backgroundColor = 'orange';
  drawActive = !drawActive;
});
