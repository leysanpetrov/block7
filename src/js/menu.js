let burger = document.querySelector('.ellipse_icon_burger');
let closeMenu = document.querySelector('.ellipse_icon_close');
let menu = document.querySelector('.menu');
let mainProjectNone = document.querySelector('.main-of-project');

burger.addEventListener('click', function () {
console.log('burger')
  if(window.innerWidth >= 360) {
    mainProjectNone.classList.add('main-of-project_opacity');
    menu.classList.add('menu_flex');
    menu.classList.add('menu_shadow');
  }
  else {
    mainProjectNone.classList.add('main-of-project_none');
    menu.classList.add('menu_flex');
  }
})

closeMenu.addEventListener('click', function () {

  mainProjectNone.classList.remove('main-of-project_opacity');
  mainProjectNone.classList.remove('main-of-project_none');
  menu.classList.remove('menu_flex');
  menu.classList.remove('menu_shadow');
})


let chat = document.querySelectorAll('.ellipse_icon_chat');
let call = document.querySelectorAll('.ellipse_icon_tel');
let closeConnect = document.querySelectorAll('.connection__icon_close');
let connectionConnect = document.querySelector('.connection-wrapper__connect');
let connectionCall = document.querySelector('.connection-wrapper__call');

for(let i = 0; i < chat.length; i++) {
  chat[i].addEventListener('click', function () {

    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connectionConnect.classList.add('connection-wrapper__connect_block');
      connectionConnect.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');

    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connectionConnect.classList.add('connection-wrapper__connect_block');
      menu.classList.remove('menu_flex');
    }
  })
}


for(let i = 0; i < call.length; i++) {
  call[i].addEventListener('click', function () {
    console.log('call')
    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connectionCall.classList.add('connection-wrapper__call_block');
      connectionCall.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');


    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connectionCall.classList.add('connection-wrapper__call_block');
      menu.classList.remove('menu_flex');
    }
  })
}


  for(let i = 0; i < closeConnect.length; i++) {
    closeConnect[i].addEventListener('click', function () {
      mainProjectNone.classList.remove('main-of-project_opacity');
      mainProjectNone.classList.remove('main-of-project_none');
      connectionConnect.classList.remove('connection-wrapper__connect_block');
      connectionConnect.classList.remove('connection-wrapper__connect_shadow');
      connectionCall.classList.remove('connection-wrapper__call_block');
      connectionCall.classList.remove('connection-wrapper__call_shadow');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_opacity');
    })
  }






