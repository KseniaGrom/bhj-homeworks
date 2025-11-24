const elements = document.querySelectorAll('.rotator__case');
let index = 0;

setInterval(() => {
    elements[index].classList.remove('rotator__case_active');
    index = (index + 1) % elements.length;
    elements[index].classList.add('rotator__case_active');
}, 1000)