let close = document.querySelector('.see-close__close');
let closeNone = document.querySelector('.see-close__close_display_none');
let seeAllNone = document.querySelector('.see-close__seeAll_display_none');
let hiddenBrand = document.querySelectorAll('.brands__logo_display_none');
let brandsLogo = document.querySelectorAll('.brands__logo');


let seeAll = document.querySelector('.see-close__seeAll');


seeAll.addEventListener('click', function () {

  for(let i = 0; i < hiddenBrand.length; i++) {
    hiddenBrand[i].classList.remove('brands__logo_display_none');
  }
  closeNone.classList.remove('see-close__close_display_none');
  seeAll.classList.add('see-close__seeAll_display_none');

})

close.addEventListener('click', function () {
  if(window.innerWidth >= 1120) {
    for (let i = 8; i < brandsLogo.length; i++) {
      brandsLogo[i].classList.add('brands__logo_display_none');
    }
  }
  else {
    for (let i = 6; i < brandsLogo.length; i++) {
      brandsLogo[i].classList.add('brands__logo_display_none');
    }
  }
  close.classList.add('see-close__close_display_none');
  seeAll.classList.remove('see-close__seeAll_display_none');
})




let close2 = document.querySelector('.see-close__close2');
let closeNone2 = document.querySelector('.see-close__close2_display_none');
let seeAllNone2 = document.querySelector('.see-close__seeAll2_display_none');
let hiddenEquipment = document.querySelectorAll('.equipments__item_display_none');
let computerEquipment = document.querySelectorAll('.equipments__item');


let seeAll2 = document.querySelector('.see-close__seeAll2');


seeAll2.addEventListener('click', function () {
  for(let i = 0; i < hiddenEquipment.length; i++) {
    hiddenEquipment[i].classList.remove('equipments__item_display_none');
  }
  closeNone2.classList.remove('see-close__close2_display_none');
  seeAll2.classList.add('see-close__seeAll2_display_none');
})

close2.addEventListener('click', function () {
  if(window.innerWidth >= 1120) {
    for (let i = 4; i < computerEquipment.length; i++) {
      computerEquipment[i].classList.add('equipments__item_display_none');
    }
  }
  else {
    for (let i = 3; i < computerEquipment.length; i++) {
      computerEquipment[i].classList.add('equipments__item_display_none');
    }
  }
  close2.classList.add('see-close__close2_display_none');
  seeAll2.classList.remove('see-close__seeAll2_display_none');
})


// Читать


let closeReed = document.querySelector('.see-close__closeReed');
let closeNoneReed = document.querySelector('.see-close__closeReed_display_none');
let seeAllReed = document.querySelector('.see-close__seeAllReed');
let text2 = document.querySelector('.main__text2');
let text3 = document.querySelector('.main__text3');
let text4 = document.querySelector('.main__text4');

seeAllReed.addEventListener('click', function () {
  closeNoneReed.classList.remove('see-close__closeReed_display_none');
  seeAllReed.classList.add('see-close__seeAllReed_display_none');

  if(window.innerWidth >= 768) {
    text3.classList.add('main__text3_block');
  }
  if(window.innerWidth >= 1120) {
    text4.classList.add('main__text4_block');
  }
  else {
    text2.classList.add('main__text2_block');
    text3.classList.add('main__text3_block');
  }
})

closeReed.addEventListener('click', function () {

  if(window.innerWidth >= 768) {
    text3.classList.remove('main__text3_block');
  }
  if(window.innerWidth >= 1120) {
    text4.classList.remove('main__text4_block');
  }
  else {
    text2.classList.remove('main__text2_block');
    text3.classList.remove('main__text3_block');
    text4.classList.remove('main__text4_block');
  }
  closeReed.classList.add('see-close__closeReed_display_none');
  seeAllReed.classList.remove('see-close__seeAllReed_display_none');
})





