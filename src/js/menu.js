let burger = document.querySelector('.ellipse_icon_burger');
let closeMenu = document.querySelector('.ellipse_icon_close');
let menu = document.querySelector('.menu');
let mainProjectNone = document.querySelector('.main-of-project');


burger.addEventListener('click', function () {
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
let request = document.querySelectorAll('.ellipse_icon_search');
let repair = document.querySelectorAll('.ellipse_icon_repair');
let closeConnect = document.querySelectorAll('.connection__icon_close');
let connectionConnect = document.querySelector('.connection-wrapper__connect');
let connectionCall = document.querySelector('.connection-wrapper__call');
let connectionRequest = document.querySelector('.connection-wrapper__request');
let connectionRepair = document.querySelector('.connection-wrapper__repair');

for(let i = 0; i < chat.length; i++) {
  chat[i].addEventListener('click', function () {

    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connectionConnect.classList.add('connection-wrapper__connect_block');
      connectionConnect.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');

    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connectionConnect.classList.add('connection-wrapper__connect_block');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');
    }
  })
}


for(let i = 0; i < call.length; i++) {
  call[i].addEventListener('click', function () {

    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connectionCall.classList.add('connection-wrapper__call_block');
      connectionCall.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');


    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connectionCall.classList.add('connection-wrapper__call_block');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');
    }
  })
}

for(let i = 0; i < request.length; i++) {
  request[i].addEventListener('click', function () {

    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connectionRequest.classList.add('connection-wrapper__request_block');
      connectionRequest.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');


    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connectionRequest.classList.add('connection-wrapper__request_block');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');
    }
  })
}


for(let i = 0; i < repair.length; i++) {
  repair[i].addEventListener('click', function () {

    if (window.innerWidth >= 360) {
      mainProjectNone.classList.add('main-of-project_opacity');
      connectionRepair.classList.add('connection-wrapper__repair_block');
      connectionRepair.classList.add('connection_shadow');
      menu.classList.add('menu_opacity');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');


    } else {
      mainProjectNone.classList.add('main-of-project_none');
      connectionRepair.classList.add('connection-wrapper__repair_block');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_shadow');
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
      connectionRequest.classList.remove('connection-wrapper__request_block');
      connectionRequest.classList.remove('connection-wrapper__request_shadow');
      connectionRepair.classList.remove('connection-wrapper__repair_block');
      connectionRepair.classList.remove('connection-wrapper__repair_shadow');
      menu.classList.remove('menu_flex');
      menu.classList.remove('menu_opacity');
    })
  }


mainProjectNone.addEventListener('click', e=> {
  let target = e.target;
  for(let i = 0; i < chat.length; i++) {
    if (target === chat[i] || target === connectionConnect) return;
  }
  for(let i = 0; i < call.length; i++) {
    if (target === call[i] || target === connectionConnect) return;
  }
  for(let i = 0; i < chat.length; i++) {
    if (target === request[i] || target === connectionRequest) return;
  }
  for(let i = 0; i < repair.length; i++) {
    if (target === repair[i] || target === connectionRepair) return;
  }
  if (target === burger || target === menu) return;
  mainProjectNone.classList.remove('main-of-project_opacity');
  mainProjectNone.classList.remove('main-of-project_none');
  menu.classList.remove('menu_flex');
  menu.classList.remove('menu_shadow');
  menu.classList.remove('menu_opacity');
  connectionConnect.classList.remove('connection-wrapper__connect_block');
  connectionConnect.classList.remove('connection-wrapper__connect_shadow');
  connectionCall.classList.remove('connection-wrapper__call_block');
  connectionCall.classList.remove('connection-wrapper__call_shadow');
  connectionRequest.classList.remove('connection-wrapper__request_block');
  connectionRequest.classList.remove('connection-wrapper__request_shadow');
  connectionRepair.classList.remove('connection-wrapper__repair_block');
  connectionRepair.classList.remove('connection-wrapper__repair_shadow');
})



