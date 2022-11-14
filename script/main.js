const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';
const main= document.querySelector('main');

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

const projectPopup = document.createElement('div');
projectPopup.className='popup-container';
projectPopup.style.display='none';

let projects = [
  {
    h1:'Multi-Post Stories',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    language: ['css','html','bootstrap', 'Ruby'],
    image: './images/Project-1.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  },
  {
    h1:'Profesional Art Printing Data',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html','bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  },
  {
    h1:'Profesional Art Printing Data',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html','bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  },
  {
    h1:'Profesional Art Printing Data',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html','bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  },
  {
    h1:'Profesional Art Printing Data',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html','bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  },
  {
    h1:'Profesional Art Printing Data',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html','bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  },
  {
    h1:'Profesional Art Printing Data',
    p:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html','bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    btn1:'https://github.com/rbhatt1999/portfolio',
    btn2:'https://github.com/rbhatt1999/portfolio'
  }  
];

let projectButtons = document.querySelectorAll('.work-container button');
for (const item of projects) {
let list = ``;
  for (const item1 of item.language) {
    list = list + `<li>${item1}</li>`
  }
let projectPopupContent = `
<div class="headline-language">
  <div class="headline-cross">
    <h1>${item.h1}</h1>
    <img src="./icons/cross.png" alt="">
  </div>
  <ul class="used-language-1">
    ${list}
  </ul>
</div>
<div class="image-paragraph-button">
  <img src="${item.image}" alt="">
  <div class="paragraph-button">
    ${item.p}
    <div class="buttons">
      <a href="${item.btn1}"><button class="see-live">See live <img src="./icons/Icon-see live.svg" alt=""></button></a>
      <a href="${item.btn2}"><button class="see-source">See live <img src="./icons/Icon -GitHub.png" alt=""></button></a>
    </div>
  </div>
</div>`;
projectPopup.innerHTML=projectPopupContent;
body.appendChild(projectPopup); 
};

