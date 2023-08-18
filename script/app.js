const dropDownIcon = document.querySelector("#drop-icon");
const dropDownIcon2 = document.querySelector("#drop-icon2");
const dropDownMenu = document.querySelector("#dropdown-menu1");
const dropDownMenu2 = document.querySelector("#dropdown-menu2");
const features = document.querySelector("#features");
const company = document.querySelector("#company");
const menuIcon = document.querySelector("#icon-menu");
const mobileMenu = document.querySelector("#mobile-nav");
const mobileFeatures = document.querySelector("#mobile-features");
const mobileDropdownMenu = document.querySelector("#mobile-dropdown-menu");
const mobileArrowDown = document.querySelector("#mobile-arrow-down");
const mobileCompany = document.querySelector("#mobile-company");
const mobileDropdownMenu2 = document.querySelector("#mobile-dropdown-menu2");
const mobileArrowDown2 = document.querySelector("#mobile-arrow2");

if (dropDownMenu.classList.contains("opacity-0")) {
  dropDownMenu.style.pointerEvents = "none";
}

if (dropDownMenu2.classList.contains("opacity-0")) {
  dropDownMenu2.style.pointerEvents = "none";
}

features.addEventListener("click", dropdown);
company.addEventListener("click", dropdown2);

mobileFeatures.addEventListener("click", () => {
  if (mobileArrowDown.getAttribute("src") === "images/icon-arrow-down.svg") {
    mobileDropdownMenu.classList.remove("hidden");
    mobileDropdownMenu.classList.add("flex");
    mobileArrowDown.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    mobileDropdownMenu.classList.add("hidden");
    mobileArrowDown.setAttribute("src", "images/icon-arrow-down.svg");
  }
});

mobileCompany.addEventListener("click", () => {
  if (mobileArrowDown2.getAttribute("src") === "images/icon-arrow-down.svg") {
    mobileDropdownMenu2.classList.remove("hidden");
    mobileDropdownMenu2.classList.add("flex");
    mobileArrowDown2.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    mobileDropdownMenu2.classList.add("hidden");
    mobileArrowDown2.setAttribute("src", "images/icon-arrow-down.svg");
  }
});

function dropdown() {
  dropDownMenu.classList.toggle("opacity-0");
  if (dropDownMenu.classList.contains("opacity-0")) {
    dropDownMenu.style.pointerEvents = "none";
    dropDownIcon.src = `images/icon-arrow-down.svg`;
  } else {
    dropDownMenu.style.pointerEvents = "auto";
    dropDownIcon.src = `images/icon-arrow-up.svg`;
  }
}
function dropdown2() {
  dropDownMenu2.classList.toggle("opacity-0");
  if (dropDownMenu2.classList.contains("opacity-0")) {
    dropDownMenu2.style.pointerEvents = "none";
    dropDownIcon2.src = `images/icon-arrow-down.svg`;
  } else {
    dropDownMenu2.style.pointerEvents = "auto";
    dropDownIcon2.src = `images/icon-arrow-up.svg`;
  }
}

// hamburger menu

menuIcon.addEventListener("click", () => {
  if (menuIcon.getAttribute("src") === "images/icon-menu.svg") {
    mobileMenu.style.right = `0px`;
    menuIcon.style.right = `1.6rem`;
    menuIcon.style.position = `fixed`;
    mobileMenu.style.boxShadow = ` 0 0 0 10000px rgba(170, 170, 170, 0.5)`;
    menuIcon.src = `images/icon-close-menu.svg`;
  } else {
    menuIcon.setAttribute("src", "images/icon-menu.svg");
    mobileMenu.style.right = `-40rem`;
    mobileMenu.style.boxShadow = "";
    menuIcon.style.position = `static`;
  }
});

document.addEventListener("click", function (e) {
  if (features.contains(e.target)) {
    return;
  } else {
    const outsideClick = !dropDownMenu.contains(e.target);
    if (outsideClick && !dropDownMenu.classList.contains("opacity-0")) {
      dropDownMenu.classList.add("opacity-0");
      dropDownIcon.src = `images/icon-arrow-down.svg`;
      dropDownMenu.style.pointerEvents = "none";
    }
  }
});

document.addEventListener("click", function (e) {
  if (company.contains(e.target)) {
    return;
  } else {
    const outsideClick = !dropDownMenu2.contains(e.target);
    if (outsideClick && !dropDownMenu2.classList.contains("opacity-0")) {
      dropDownMenu2.classList.add("opacity-0");
      dropDownIcon2.src = `images/icon-arrow-down.svg`;
      dropDownMenu2.style.pointerEvents = "none";
    }
  }
});
