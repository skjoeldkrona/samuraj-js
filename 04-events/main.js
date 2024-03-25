document.body.addEventListener('mousemove', (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;

  document.querySelector('h1').textContent = `${clientX}, ${clientY}`;

  const width = window.innerWidth;
  const height = window.innerHeight;

  const red = (clientX / width) * 100;
  const green = (clientY / height) * 100;
  const blue = ((clientX / width) * 100 + (clientY / height) * 100) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});
