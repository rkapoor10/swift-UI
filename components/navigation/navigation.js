const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu-list");

menuBtn.addEventListener("click", ()=>{
    menuList.style.display = "block";
})

menuList.addEventListener("click", ()=>{
    menuList.style.display = "none";
})

