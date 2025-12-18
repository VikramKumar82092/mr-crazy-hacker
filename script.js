/* ===============================
   Vikram | Professional Website
   JavaScript File
================================ */

// Page load check
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully 🚀");
});

/* ===============================
   Smooth Scrolling for Navbar
================================ */
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* ===============================
   Active Menu Highlight on Scroll
================================ */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ===============================
   Fade-in Animation on Scroll
================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".section, .card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* ===============================
   Button Hover Effect
================================ */
const buttons = document.querySelectorAll(".btn, .card a");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* ===============================
   Future Ready Mobile Menu
================================ */
// (Mobile hamburger menu can be added later here)
