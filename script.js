const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");

// Current year
if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile menu
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Close menu when a link is clicked
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

    navItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});

// Highlight active section while scrolling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section[id]");
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    const activeLink = document.querySelector(
      `.nav-links a[href="#${id}"]`
    );

    if (scrollPosition >= top && scrollPosition < top + height) {
      navItems.forEach((link) => link.classList.remove("active"));
      if (activeLink) activeLink.classList.add("active");
    }
  });
});