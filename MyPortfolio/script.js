const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.querySelector('.switcher_btn').onclick = () =>{
    document.querySelector('.color_switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme_buttons');

themeButtons.forEach(color =>{

  color.addEventListener('click', () =>{
      let dataColor = color.getAttribute('data_color');
      document.querySelector(':root').style.setProperty('--yellow',dataColor)
  });
});