window.onscroll=()=>{
    const stickyPart = document.getElementById("header-bottom")
    if (window.scrollY >= 85) {
        stickyPart.style.position = "fixed";
        stickyPart.style.boxShadow = "0px 11px 49px 0px rgba(0,0,0,0.2)";
    } else {
        stickyPart.style.position = "sticky";
        stickyPart.style.boxShadow = "none";
    }
}

document.getElementById("burger").addEventListener("click", ()=> {
    const menu = document.querySelector(".burger-menu");
    menu.classList.toggle("show")
})