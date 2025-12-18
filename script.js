function showPage(pageId) {
    // 1. Saare sections ko chhupa do
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Clicked section ko dikhao
    document.getElementById(pageId).classList.add('active');

    // 3. Menu links se 'active' class hatao aur current wale pe lagao
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('link-' + pageId).classList.add('active');
}
