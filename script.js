const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");
const info = document.querySelector(".toggle-info");

toggle.addEventListener("click", () => {
    container.classList.toggle("dark") ? 
    (toggle.firstElementChild.className = "far fa-moon", info.innerHTML = "Toggle Light Mode")
    :(toggle.firstElementChild.className = "far fa-sun", info.innerHTML = "Toggle Dark Mode")
})
info.addEventListener("click", () => {
    container.classList.toggle("dark") ? 
    (toggle.firstElementChild.className = "far fa-moon", info.innerHTML = "Toggle Light Mode")
    :(toggle.firstElementChild.className = "far fa-sun", info.innerHTML = "Toggle Dark Mode")
})