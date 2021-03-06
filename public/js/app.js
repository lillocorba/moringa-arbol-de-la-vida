const burger = document.querySelector(".contenedor__burger")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const menu = document.querySelector(".contenedor__menu__ul")
const linkMenu1 = document.querySelector(".link-menu-1")
const linkMenu2 = document.querySelector(".link-menu-2")
const linkMenu3 = document.querySelector(".link-menu-3")
const linksMenu = document.querySelectorAll(".link-menu")

burger.addEventListener("click", () => {
    line1.classList.toggle('line1-active')
    line2.classList.toggle('line2-active')
    line3.classList.toggle('line3-active')
    menu.classList.toggle('contenedor__menu__ul-active')
    linkMenu1.classList.toggle('link-menu-1-active')
    linkMenu2.classList.toggle('link-menu-2-active')
    linkMenu3.classList.toggle('link-menu-3-active')
})

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.toggle('contenedor__menu__ul-active')
        line1.classList.toggle('line1-active')
        line2.classList.toggle('line2-active')
        line3.classList.toggle('line3-active')
        linkMenu1.classList.toggle('link-menu-1-active')
        linkMenu2.classList.toggle('link-menu-2-active')
        linkMenu3.classList.toggle('link-menu-3-active')
    })
})