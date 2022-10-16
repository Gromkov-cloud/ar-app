document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.querySelector(".models-list-open")
    const modelsMenu = document.querySelector(".models-list")
    const body = document.querySelector("body")

    openBtn.addEventListener("click", () => {
        modelsMenu.classList.toggle("open")
        openBtn.classList.toggle("active")
        body.classList.toggle("hidden")
    })
})
