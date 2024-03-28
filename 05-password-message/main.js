const input = document.querySelector('input');
const div = document.querySelector('.message');
const password = 'user';
const message = `Don't look for me`;

input.addEventListener('focus', (e) => {
  e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
  e.target.classList.remove('active');
});

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  if (password === e.target.value) {
    div.textContent = message;
    e.target.value = '';
  } else {
    div.textContent = '';
  }
});
