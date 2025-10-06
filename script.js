document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.queryselector('.header__hamburger');
    const navLinks = document.queryselector('.header__nav-links');
    const navItems = document.querydocument('.header__nav-links a');
    const overlay = document.queryselector('.header__overlay');
    if (hamburger && navLinks && overlay) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        })

        overlay.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = '';
        });

    }
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';

        })
    })

});