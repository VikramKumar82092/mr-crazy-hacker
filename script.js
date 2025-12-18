/* ==================================
   Vikram | Professional Portfolio JS
================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully 🚀");

  heroAnimation();
  scrollReveal();
});

/* ==================================
   Smooth Scroll Navigation
================================== */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ==================================
   Active Navbar Highlight on Scroll
================================== */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

/* ==================================
   Scroll Reveal Animation
================================== */
function scrollReveal() {
  const revealElements = document.querySelectorAll(
    ".section, .card, .hero-text, .hero-img"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
}

/* ==================================
   Hero Entrance Animation
================================== */
function heroAnimation() {
  const heroText = document.querySelector(".hero-text");
  const heroImg = document.querySelector(".hero-img");

  if (heroText && heroImg) {
    heroText.style.opacity = "0";
    heroImg.style.opacity = "0";

    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroImg.style.transition = "all 1s ease";

      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";

      heroImg.style.opacity = "1";
      heroImg.style.transform = "translateX(0)";
    }, 300);
  }
}

/* ==================================
   Button Hover Animation
================================== */
const buttons = document.querySelectorAll(".btn, .card a");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
