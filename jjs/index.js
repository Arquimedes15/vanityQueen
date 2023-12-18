const menu_bar_A = document.querySelector("#meun-a")

const main = document.querySelector("main")
let mini = false;

menu_bar_A.addEventListener("click", () => {
    if (main.querySelector("header").style.position != "static") {
        main.querySelector("header").style.position = "static"
        main.style.overflowY = "hidden";
        main.style.height = `${window.innerHeight - (window.innerHeight / 4)}px`
        main.style.width = `${window.innerWidth - (window.innerWidth / 4)}px`
        main.style.position = "fixed"
        main.style.top = `5%`;
        var delau = setTimeout(() => {
            mini = true
        }, 100)
        main.style.left = `-25%`
        main.style.cursor = "pointer"
        menu_ol.style.display = "block";
    } else {
        mini = false
        main.querySelector("header").style.position = "fixed"
        main.style.overflow = "";
        main.style.height = `100%`
        main.style.width = `auto`
        main.style.position = "static"
        main.style.top = `0`;
        main.style.left = `0`
        menu_ol.style.display = "none"
        main.style.cursor = ""
    }
})

main.addEventListener("click", () => {
    if (mini) {
        mini = false
        main.style.height = `100%`
        main.style.width = `auto`
        main.style.top = `0`;
        main.style.left = `0`;
        main.style.cursor = ""
        main.style.position = "static"
        main.style.overflow = "";
        menu_ol.style.display = "none"
        main.querySelector("header").style.position = "fixed"
    }
})
const menu_ol = document.querySelector(".menu-a-ol")

function sn_menuOl() {
    if (menu_ol.style.display == "none") {
        menu_ol.style.display = "block";
    } else {
        menu_ol.style.display = "none"
    }
}

const menu_pc = document.querySelector(".menu_pc");

document.addEventListener("scroll", () => {
    if (scrollY > 1) {
        menu_pc.querySelector(".logo").style.margin = "10px 0px"
    } else {
        menu_pc.querySelector(".logo").style.margin = "40px 0px"
    }
})

const home = document.querySelector(".home")

const redict = document.querySelectorAll("#redict");

const genpag = document.querySelector(".genarete-pag");



redict.forEach(redicrecion => {
    redicrecion.addEventListener("click", (e) => {
        reset();
        home.style.display = "none"
        genpag.style.display = "flex"
        genpag.innerHTML = cargarPag(e.target.getAttribute("value"));
        draw_setMenu(e.target.getAttribute("value"));
    })
});

function draw_setMenu(e) {
    const nose = document.querySelectorAll(".nose");
    for (let x = 0; x < redict.length; x++) {
        if (redict[x].getAttribute("value") == e) {
            nose[x].classList.add("selec")
        } else {
            nose[x].classList.remove("selec")
        }
    }
}

function reset() {
    mini = false
    main.style.height = `100%`
    main.style.width = `auto`
    main.style.top = `0`;
    main.style.left = `0`;
    main.style.cursor = ""
    main.style.position = "static"
    main.style.overflow = "";
    menu_ol.style.display = "none"
    main.querySelector("header").style.position = "fixed"
}

const buttonHome = document.querySelectorAll(".logo")

buttonHome.forEach(button =>{
    button.addEventListener("click", () => {
        home.style.display = "block"
        genpag.style.display = "none"
        draw_setMenu("n")
    })
})