// Mobile menu functionality
const burgerBtn = document.querySelector(".header-burger-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu-close");
const menuLinks = document.querySelectorAll(".mobile-menu-link");

// Open menu
burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scroll
});

// Close menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = ""; // Restore scroll
});

// Close menu when clicking on links
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Close menu when clicking outside
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
});
