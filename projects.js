// Mobile menu functionality
const burgerBtn = document.querySelector(".header-burger-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu-link");

// Toggle menu
burgerBtn.addEventListener("click", () => {
  const isActive = mobileMenu.classList.contains("active");

  if (isActive) {
    // Close menu
    mobileMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    // Open menu
    mobileMenu.classList.add("active");
    burgerBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});

// Close menu when clicking on links
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Close menu when clicking outside
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
});
