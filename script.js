document.querySelectorAll('a[href^="#"]').forEach(anchor =>
{
    anchor.addEventListener('click', function(e) {
        e.preventDefalut();
        document.querySelector(this.getAttribute('href')).
        scrollIntoView({
            behavior:'smooth'
        });
    });
}
);