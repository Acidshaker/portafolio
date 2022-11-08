
const btnMenu = document.querySelector('.btn__open')
const btnClose = document.querySelector('.btn__close')
const Menu = document.querySelector('.navbar__menu')


btnMenu.onclick = function () {
  Menu.classList.add('show--menu')
  btnMenu.classList.add('hidden')
}

btnClose.onclick = function () {
  Menu.classList.remove('show--menu')
  btnMenu.classList.remove('hidden')
}