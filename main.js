let menu = document.querySelector(".menu");
let Btn = document.querySelector(".bx-menu");
console.log(Btn);
  
Btn.addEventListener("click", ()=>{ //добавили действие
  menu.classList.toggle("close"); //включить или выключить класс
});