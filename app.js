//MOBILE NAV
const openMnav = document.querySelector(".mnav_open-btn");
const mnav = document.querySelector(".mnav");
const closeMnav = document.querySelector(".mnav_close-btn");
const overlay = document.getElementById("overlay");

openMnav.addEventListener("click", () => {
        mnav.classList.remove("translate-x-full", "opacity-0");
        mnav.classList.add("translate-x-0", "opacity-100");
        overlay.classList.remove("opacity-0", "pointer-events-none");
        overlay.classList.add("opacity-100");
});
closeMnav.addEventListener("click", () => {
        mnav.classList.remove("translate-x-0", "opacity-100");
        mnav.classList.add("translate-x-full", "opacity-0");
        overlay.classList.add("opacity-0", "pointer-events-none");
        overlay.classList.remove("opacity-100");
    });

// close if overlay clicked
overlay.addEventListener("click", () => {
    mnav.classList.remove("translate-x-0", "opacity-100");
    mnav.classList.add("translate-x-full", "opacity-0");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");
});

// DROPDOWN
const dropDownBtn = document.querySelectorAll(".dropdown_btn");

dropDownBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dropdown = btn.closest(".dropdown") //Scopes everything in the dropdown container
        const icon = dropdown.querySelector(".dropdown_icon");
        const list = dropdown.querySelector(".dropdown_list");
        const isOpen = !list.classList.contains("max-h-96");

        list.classList.toggle("max-h-0", !isOpen);
        list.classList.toggle("max-h-96", isOpen);
        icon.classList.toggle("rotate-180", isOpen);
    });
});