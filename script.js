// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-menu a').forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
