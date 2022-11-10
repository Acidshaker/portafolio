

const btnLight = document.querySelector(".btn__light")
const btnDark = document.querySelector(".btn__dark")
const body = document.querySelector("body")

const theme = window.localStorage.getItem("theme")




btnDark.onclick = function () {
  btnDark.classList.add("active")
  btnLight.classList.remove("active")
  body.classList.add("dark-theme")
}

btnLight.onclick = function () {
  btnLight.classList.add("active")
  btnDark.classList.remove("active")
  body.classList.remove("dark-theme")
}
