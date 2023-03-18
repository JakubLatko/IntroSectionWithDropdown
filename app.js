const menuButton = document.querySelector(".menuButton")
const navList = document.querySelector(".navList")
const menuCloseButton = document.querySelector(".menuCloseButton")

menuButton.addEventListener("click", () => {
    if(navList.ariaExpanded === "false"){
        navList.classList.remove("navClosed")
        navList.setAttribute("aria-expanded", "true")
    }
})

menuCloseButton.addEventListener("click", () => {
    if(navList.ariaExpanded === "true"){
        navList.classList.add("navClosed")
        navList.setAttribute("aria-expanded", "false")
    }
})


const dropdownFirst = document.querySelector("#dropdownFirst")
const dropdownSecond = document.querySelector("#dropdownSecond")
const arrowFirst = document.querySelector(".arrowFirst")
const arrowSecond = document.querySelector(".arrowSecond")
const openerFirst = document.querySelector(".openerFirst")
const openerSecond = document.querySelector(".openerSecond")

openerFirst.addEventListener("click", () => {
    if(dropdownFirst.ariaExpanded === "false"){
        dropdownFirst.classList.remove("dropdownClosed")
        dropdownFirst.setAttribute("aria-expanded", "true")
        arrowFirst.src = "images/icon-arrow-up.svg"
    } else if(dropdownFirst.ariaExpanded === "true"){
        dropdownFirst.classList.add("dropdownClosed")
        dropdownFirst.setAttribute("aria-expanded", "false")
        arrowFirst.src = "images/icon-arrow-down.svg"
    }
})


openerSecond.addEventListener("click", () => {
    if(dropdownSecond.ariaExpanded === "false"){
        dropdownSecond.classList.remove("dropdownClosed")
        dropdownSecond.setAttribute("aria-expanded", "true")
        arrowSecond.src = "images/icon-arrow-up.svg"
    }else if(dropdownSecond.ariaExpanded === "true"){
        dropdownSecond.classList.add("dropdownClosed")
        dropdownSecond.setAttribute("aria-expanded", "false")
        arrowSecond.src = "images/icon-arrow-down.svg"
    }
})


    // window.addEventListener("resize", ()=>{
    //     if(window.innerWidth > 1440 ){
    //         dropdownFirst.classList.remove("dropdownClosed")
    //         dropdownSecond.classList.remove("dropdownClosed")
    //     }
    // })

    // if(window.innerWidth > 1440 ){
    //     dropdownFirst.classList.remove("dropdownClosed")
    //     dropdownSecond.classList.remove("dropdownClosed")
    // }