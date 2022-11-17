const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';
const main = document.querySelector('main');

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

const projects = [
  {
    id: 'project-1',
    h1: 'Multi-Post Stories',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    language: ['css', 'html', 'bootstrap', 'Ruby'],
    image: './images/Project-1.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
  {
    id: 'project-2',
    h1: 'Profesional Art Printing Data',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html', 'bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    background: './images/Project-2.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
  {
    id: 'project-3',
    h1: 'Profesional Art Printing Data',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html', 'bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    background: './images/Project-2.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
  {
    id: 'project-4',
    h1: 'Profesional Art Printing Data',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html', 'bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    background: './images/Project-2.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
  {
    id: 'project-5',
    h1: 'Profesional Art Printing Data',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html', 'bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    background: './images/Project-2.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
  {
    id: 'project-6',
    h1: 'Profesional Art Printing Data',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html', 'bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    background: './images/Project-2.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
  {
    id: 'project-7',
    h1: 'Profesional Art Printing Data',
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    language: ['html', 'bootstrap', 'Ruby'],
    image: './images/Project-3.png',
    background: './images/Project-2.png',
    btn1: 'https://rbhatt1999.github.io/Portfolio/',
    btn2: 'https://github.com/rbhatt1999/portfolio',
  },
];

const projectArray = [];

const projectArrayPopup = [];
projects.forEach((item) => {
  let list = '';
  item.language.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });

  if (item.id === 'project-1') {
    const projectContent = `<div class="${item.id}">
  <a href="#" rel="noopener" class="project-1-img"><img src="${item.image}" alt="Multi-Post Stories Project Overview"></a>
  <div class="project-info">
    <h3>${item.h1}</h3>
    <p>${item.p}</p>
    <ul class="used-language-1">
    ${list}
    </ul>
    <button>See Project</button>
  </div>
</div>`;
    projectArray.push(projectContent);
  } else {
    const projectContent = `<div class="${item.id} projects">
    <div class="projects-info">
      <h3>${item.h1}</h3>
      <p>${item.p}</p>
      <ul class="used-language-2">
      ${list}
      </ul>
    </div>
    <button>See Project</button>
  </div>`;
    projectArray.push(projectContent);
  }

  const projectPopupContent = `<div class="headline-language">
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
    <p>${item.p}</p>
    <div class="buttons">
      <a href="${item.btn1}" target="_blank"><button class="see-live">See live <img src="./icons/Icon-see live.svg" alt=""></button></a>
      <a href="${item.btn2}" target="_blank"><button class="see-source">See Source <img src="./icons/Icon -GitHub.png" alt=""></button></a>
    </div>
  </div>
</div>`;
  projectArrayPopup.push(projectPopupContent);
});

const workSection = document.querySelector('.work-container');
for (let i = 0; i < projects.length; i += 1) {
  if (projects[i].id === 'project-1') {
    projects[i].div = document.createElement('div');
    projects[i].div.className = `${projects[i].id}`;
    projects[i].div.innerHTML = projectArray[i];
    workSection.appendChild(projects[i].div);
  } else {
    projects[i].div = document.createElement('div');
    projects[i].div.className = `${projects[i].id} projects`;
    projects[i].div.innerHTML = projectArray[i];
    workSection.appendChild(projects[i].div);
  }
}

const backImage = document.querySelectorAll('.projects-info');
for (let i = 0; i < backImage.length; i += 1) {
  backImage[i].style.backgroundImage = `url(${projects[i + 1].background})`;
}

for (let i = 0; i < projects.length; i += 1) {
  projects[i].div = document.createElement('div');
  projects[i].div.className = 'popup-container';
  projects[i].div.innerHTML = projectArrayPopup[i];
  body.appendChild(projects[i].div);
}

const projectButtons = document.querySelectorAll('.work-container button');
const projectList = document.querySelectorAll('.popup-container');
for (let i = 0; i < projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => {
    projectList[i].style.display = 'flex';
    main.style.filter = 'blur(10px)';
  });
}

const crossList = document.querySelectorAll('.headline-cross>img');
for (let i = 0; i < crossList.length; i += 1) {
  crossList[i].addEventListener('click', () => {
    projectList[i].style.display = 'none';
    main.style.filter = 'blur(0)';
  });
}

const form = document.querySelector('.contact-form>form');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');
form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
  }
});

email.addEventListener('input', () => {
  if (email.value.toLowerCase() !== email.value) {
    email.classList.add('invalid');
    errorMsg.textContent = 'The email must be in lowercase letters';
    errorMsg.classList.remove('d-hide');
  } else {
    email.classList.remove('invalid');
    errorMsg.textContent = '';
    errorMsg.classList.add('d-hide');
  }
});

const inputField = document.querySelectorAll('.input-field');

let field= {
  name: "",
  email: "",
  message: ""
}

inputField.forEach((input) => {
  input.addEventListener('input', (event) => {
    field[input.name]= input.value;
    localStorage.setItem('formData', JSON.stringify(field));
  })
})

let formStorage = JSON.parse(localStorage.getItem('formData'));
if (formStorage) {
  inputField.forEach((item)=>{
    item.value = formStorage[item.name];
  })
}
