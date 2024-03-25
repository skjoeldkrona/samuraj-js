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
document.body.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
  const colour = getColour(e);
  document.body.style.backgroundColor = colour;
});

function getColour(e) {
  if (e.clientX % 2 === 0) {
    if (e.clientY % 2 === 0) {
      return 'red';
    } else {
      return 'green';
    }
  } else {
    if (e.clientY % 2 === 0) {
      return 'green';
    } else {
      return 'blue';
    }
  }
}
