!function(e){var n={};function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)o.d(t,s,function(n){return e[n]}.bind(null,s));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){e.exports=o(1)},function(e,n,o){"use strict";o.r(n);o(2),o(3),o(4),o(5),o(6);console.log("Works!")},function(e,n,o){},function(e,n){var o=document.querySelector(".see-close__close"),t=document.querySelector(".see-close__close_display_none"),s=(document.querySelector(".see-close__seeAll_display_none"),document.querySelectorAll(".brands__logo_display_none")),c=document.querySelectorAll(".brands__logo"),l=document.querySelector(".see-close__seeAll");l.addEventListener("click",(function(){for(var e=0;e<s.length;e++)s[e].classList.remove("brands__logo_display_none");t.classList.remove("see-close__close_display_none"),l.classList.add("see-close__seeAll_display_none")})),o.addEventListener("click",(function(){if(window.innerWidth>=1120)for(var e=8;e<c.length;e++)c[e].classList.add("brands__logo_display_none");else for(var n=6;n<c.length;n++)c[n].classList.add("brands__logo_display_none");o.classList.add("see-close__close_display_none"),l.classList.remove("see-close__seeAll_display_none")}));var i=document.querySelector(".see-close__close2"),r=document.querySelector(".see-close__close2_display_none"),a=(document.querySelector(".see-close__seeAll2_display_none"),document.querySelectorAll(".equipments__item_display_none")),_=document.querySelectorAll(".equipments__item"),d=document.querySelector(".see-close__seeAll2");d.addEventListener("click",(function(){for(var e=0;e<a.length;e++)a[e].classList.remove("equipments__item_display_none");r.classList.remove("see-close__close2_display_none"),d.classList.add("see-close__seeAll2_display_none")})),i.addEventListener("click",(function(){if(window.innerWidth>=1120)for(var e=4;e<_.length;e++)_[e].classList.add("equipments__item_display_none");else for(var n=3;n<_.length;n++)_[n].classList.add("equipments__item_display_none");i.classList.add("see-close__close2_display_none"),d.classList.remove("see-close__seeAll2_display_none")}))},function(e,n){new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),new Swiper(".swiper-container-2",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination-2",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),new Swiper(".swiper-container-3",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination-3",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})},function(e,n){var o=document.querySelector(".ellipse_icon_burger"),t=document.querySelector(".ellipse_icon_close"),s=document.querySelector(".menu"),c=document.querySelector(".main-of-project");o.addEventListener("click",(function(){console.log("burger"),window.innerWidth>=360?(c.classList.add("main-of-project_opacity"),s.classList.add("menu_flex"),s.classList.add("menu_shadow")):(c.classList.add("main-of-project_none"),s.classList.add("menu_flex"))})),t.addEventListener("click",(function(){c.classList.remove("main-of-project_opacity"),c.classList.remove("main-of-project_none"),s.classList.remove("menu_flex"),s.classList.remove("menu_shadow")}));for(var l=document.querySelectorAll(".ellipse_icon_chat"),i=document.querySelectorAll(".ellipse_icon_tel"),r=document.querySelector(".connection__icon_close"),a=document.querySelector(".connection"),_=document.querySelectorAll(".connection__exclude"),d=document.querySelector(".connection__border-text-connect"),u=document.querySelector(".connection__border-text-call"),p=0;p<l.length;p++)l[p].addEventListener("click",(function(){window.innerWidth>=360?(c.classList.add("main-of-project_opacity"),a.classList.add("connection_block"),a.classList.add("connection_shadow"),s.classList.add("menu_opacity"),d.classList.remove("connection__border-text-connect_none")):(c.classList.add("main-of-project_none"),a.classList.add("connection_block"),s.classList.remove("menu_flex"),d.classList.remove("connection__border-text-connect_none"))}));for(var m=0;m<i.length;m++)i[m].addEventListener("click",(function(){if(console.log("call"),window.innerWidth>=360){c.classList.add("main-of-project_opacity"),a.classList.add("connection_block"),a.classList.add("connection_shadow"),s.classList.add("menu_opacity"),u.classList.remove("connection__border-text-call_none");for(var e=0;e<_.length;e++)_[e].classList.add("connection__exclude_none")}else{c.classList.add("main-of-project_none"),a.classList.add("connection_block"),s.classList.remove("menu_flex"),u.classList.remove("connection__border-text-call_none");for(var n=0;n<_.length;n++)_[n].classList.add("connection__exclude_none")}}));r.addEventListener("click",(function(){console.log("close"),c.classList.remove("main-of-project_opacity"),c.classList.remove("main-of-project_none"),a.classList.remove("connection_block"),a.classList.remove("connection_shadow"),s.classList.remove("menu_flex"),s.classList.remove("menu_opacity"),d.classList.add("connection__border-text-connect_none"),u.classList.add("connection__border-text-call_none");for(var e=0;e<_.length;e++)_[e].classList.remove("connection__exclude_none")}))},function(e,n){}]);
//# sourceMappingURL=bundle.js.map