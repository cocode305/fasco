const body = document.body;

//MOBILE NAV
const openMnav = document.querySelector(".mnav_open-btn");
const mnavMenu = document.querySelector(".mnav_menu");
const closeMnav = document.querySelector(".mnav_close-btn");
const overlay = document.getElementById("overlay");

openMnav.addEventListener("click", () => {
  mnavMenu.classList.remove("translate-x-full", "opacity-0");
  mnavMenu.classList.add("translate-x-0", "opacity-100");
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");

  // Lock scroll when the menu is open
  lockScroll();
});
closeMnav.addEventListener("click", () => {
    mnavMenu.classList.remove("translate-x-0", "opacity-100");
    mnavMenu.classList.add("translate-x-full", "opacity-0");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");

    // Unlock scroll when the menu is closed
    unlockScroll();

    // Close all opened dropdown menus when you close the mnav menu
    closeAllDropdowns();
});
// close if overlay clicked
overlay.addEventListener("click", () => {
  mnavMenu.classList.remove("translate-x-0", "opacity-100");
  mnavMenu.classList.add("translate-x-full", "opacity-0");
  overlay.classList.add("opacity-0", "pointer-events-none");
  overlay.classList.remove("opacity-100");

  // Close all opened dropdown menus when you close the mnav menu
  closeAllDropdowns();
});

//Lock scroll when menu is open
let lockedScrollY = 0;

function lockScroll() {
    lockedScrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.position = "fixed";
    body.style.top = `${lockedScrollY}`;
    body.style.left = "0";
    body.style.right = "0";
    if (scrollbarWidth) body.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockScroll() {
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    window.scrollTo(0, lockedScrollY);
}
// Mobile Nav Ends

// DROPDOWN
const dropdowns = document.querySelectorAll(".dropdown");

// Open or Close the dropdown menus
dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropdown_btn");
    const icon = dropdown.querySelector(".dropdown_icon");
    const list = dropdown.querySelector(".dropdown_list");
    
    btn.addEventListener("click", () => {
        const isOpen = !list.classList.contains("max-h-96");

        list.classList.toggle("max-h-0", !isOpen);
        list.classList.toggle("max-h-96", isOpen);
        icon.classList.toggle("rotate-180", isOpen);
    });
});

// Close all opened dropdown menus when the mnav menu closes
function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
        const list = dropdown.querySelector(".dropdown_list");
        const icon = dropdown.querySelector(".dropdown_icon");
        
        list.classList.add("max-h-0");
        list.classList.remove("max-h-96");
        icon.classList.remove("rotate-180");
    });
};
// Dropdown Ends