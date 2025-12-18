/* =========================================
   Vikram | Creator Website JavaScript
   (CodeWithHarry-style clean behavior)
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  smoothScroll();
  activeNavbar();
  scrollReveal();
});

/* =========================================
   Smooth Scrolling for Navbar Links
========================================= */
function smoothScroll() {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}

/* =========================================
   Active Navbar Link on Scroll
========================================= */
function activeNavbar() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
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
}

/* =========================================
   Simple Scroll Reveal Animation
========================================= */
function scrollReveal() {
  const revealElements = document.querySelectorAll(
    ".hero, .section, .card"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
}
