let body = document.querySelector('body');
let menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const divContent = '<img src="./icons/cross.png" alt=""> <a href="#portfolio">Portfolio</a> <a href="#aboutMe">About</a> <a href="#contactForm">Contact</a>';
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);