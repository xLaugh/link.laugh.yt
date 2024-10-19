document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.social-links li');
    const footer = document.querySelector('footer');
    
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, index * 200);
    });
    setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }, links.length * 200);
});