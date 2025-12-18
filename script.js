document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar a");

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Active menu
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(a => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("active");
      }
    });
  });

  // Scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
  });

});
