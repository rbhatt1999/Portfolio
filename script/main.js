const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const divContent = '<img class="cross-icon" src="./icons/cross.png" alt=""> <a href="#portfolio">Portfolio</a> <a href="#aboutMe">About</a> <a href="#contactForm">Contact</a>';
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);
const hamburgerIcon = document.querySelector('.hamburger-menu');
hamburgerIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
});

const crossIcon = document.querySelector('.cross-icon');
crossIcon.addEventListener('click', () => {
  menuDiv.style.display = 'none';
});

const itemList = document.querySelectorAll('.menu-content>a');

itemList.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
  });
});