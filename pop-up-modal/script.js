"use strict";

const buttons = document.querySelectorAll(".button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

let hideCls = 'hidden';
let showCls = 'backdrop';
backdrop.classList.add(hideCls);
for (let i = 0; i < buttons.length; i++) buttons[i].addEventListener('click',function(e) {
  backdrop.classList.remove(hideCls);
  backdrop.classList.add(showCls);
  backdrop.addEventListener('click',function(e) {
    backdrop.classList.add(hideCls);
    backdrop.classList.remove(showCls);
  })
});

close.addEventListener('click',function(e) {
  backdrop.classList.remove(showCls);
  backdrop.classList.add(hideCls);
})