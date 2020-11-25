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
let closeConnect = document.querySelector('.connection__icon_close');
let connection = document.querySelector('.connection');
let inputFormNone = document.querySelectorAll('.connection__exclude');
let titleNoneConnect = document.querySelector('.connection__border-text-connect');
let titleNoneCall = document.querySelector('.connection__border-text-call');

for(let i = 0; i < chat.length; i++) {
  chat[i].addEventListener('click', function () {

    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connection.classList.add('connection_block');
      connection.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');
      titleNoneConnect.classList.remove('connection__border-text-connect_none');

    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connection.classList.add('connection_block');
      menu.classList.remove('menu_flex');
      titleNoneConnect.classList.remove('connection__border-text-connect_none');
    }
  })
}


for(let i = 0; i < call.length; i++) {
  call[i].addEventListener('click', function () {
    console.log('call')
    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connection.classList.add('connection_block');
      connection.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');

      titleNoneCall.classList.remove('connection__border-text-call_none');

      for(let i = 0; i < inputFormNone.length; i++) {
        inputFormNone[i].classList.add('connection__exclude_none');
      }


    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connection.classList.add('connection_block');
      menu.classList.remove('menu_flex');
      titleNoneCall.classList.remove('connection__border-text-call_none');
      for(let i = 0; i < inputFormNone.length; i++) {
        inputFormNone[i].classList.add('connection__exclude_none');
      }
    }
  })
}

closeConnect.addEventListener('click', function () {
  console.log('close')
  mainProjectNone.classList.remove('main-of-project_opacity');
  mainProjectNone.classList.remove('main-of-project_none');
  connection.classList.remove('connection_block');
  connection.classList.remove('connection_shadow');
  menu.classList.remove('menu_flex');
  menu.classList.remove('menu_opacity');
  titleNoneConnect.classList.add('connection__border-text-connect_none');
  titleNoneCall.classList.add('connection__border-text-call_none');


  for(let i = 0; i < inputFormNone.length; i++) {
    inputFormNone[i].classList.remove('connection__exclude_none');
  }
})





