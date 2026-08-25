const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

    navItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section[id]");
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const matchingLink = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (scrollPosition >= top && scrollPosition < top + height) {
      navItems.forEach((link) => link.classList.remove("active"));
      if (matchingLink) matchingLink.classList.add("active");
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please fill in all fields.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Replace this email with your real email address.
  const destination = "parthibpriyam@gmail.com";

  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email app...";
});
