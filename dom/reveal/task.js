const elements = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getBoundingClientRect().top < window.innerHeight) {
            elements[i].classList.add('reveal_active');
        }
    }
})