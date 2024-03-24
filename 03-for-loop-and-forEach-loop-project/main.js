// const btn = document.querySelector('button');
// const list = document.querySelectorAll('li');
// let size = 10;

// My solution with forEach
// btn.addEventListener('click', () => {
//   list.forEach((li) => {
//     li.style.display = 'block';
//     li.style.fontSize = `${size}px`;
//   });
//   size++;
// });

// My solution with for loop
// btn.addEventListener('click', () => {
//   for (let i = 0; i < list.length; i++) {
//     list[i].style.display = 'block';
//     list[i].style.fontSize = size + 'px';
//   }
//   size++;
// });

let size = 10;
let liOrder = 1;

const init = () => {
  const button = document.createElement('button');
  button.textContent = 'Add 10 elements to the list';
  button.style.marginRight = '10px';
  document.body.appendChild(button);

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  document.body.appendChild(resetButton);

  const ulList = document.createElement('ul');
  document.body.appendChild(ulList);

  button.addEventListener('click', createLiElems);
  resetButton.addEventListener('click', resetList);
};

function createLiElems() {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `item no ${liOrder++}`;
    li.style.fontSize = `${size++}px`;
    let ulList = document.querySelector('ul').appendChild(li);
  }
}

function resetList() {
  document.querySelector('ul').innerHTML = '';
  size = 10;
  liOrder = 1;
}

init();
