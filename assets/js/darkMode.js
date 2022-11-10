
const btnLight = document.querySelector(".btn__light")
const btnDark = document.querySelector(".btn__dark")
const body = document.querySelector("body")

// let theme = window.localStorage.getItem("theme")
// let iconTheme = window.localStorage.get("icon-theme")


btnDark.onclick = function () {
  btnDark.classList.add("active")
  btnLight.classList.remove("active")
  body.classList.add("dark-theme")

  if (body.classList.contains("dark-theme")) {
    window.localStorage.setItem("dark-mode", "dark")
    window.localStorage.setItem("icon-theme", "sun")
  }
  else {
    window.localStorage.setItem("dark-mode", "light")
    window.localStorage.setItem("icon-theme", "moon")
  }

}

btnLight.onclick = function () {
  btnLight.classList.add("active")
  btnDark.classList.remove("active")
  body.classList.remove("dark-theme")

  if (body.classList.contains("dark-theme")) {
    window.localStorage.setItem("dark-mode", "dark")
    window.localStorage.setItem("icon-theme", "sun")
  }
  else {
    window.localStorage.setItem("dark-mode", "light")
    window.localStorage.setItem("icon-theme", "moon")
  }

}

if (window.localStorage.getItem("dark-mode") === "dark") {
  body.classList.add("dark-theme")
}
else {
  body.classList.remove("dark-theme")
}

if (window.localStorage.getItem("icon-theme") === "sun") {
  btnDark.classList.add("active")
  btnLight.classList.remove("active")
}
else {
  btnDark.classList.remove("active")
  btnLight.classList.add("active")
}