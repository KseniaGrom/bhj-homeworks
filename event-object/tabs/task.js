let tab = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function(){
        for (let j = 0; j < tab.length; j++) {
            tab[j].classList.remove('tab_active');
            tabContent[j].classList.remove('tab__content_active')
        }
    this.classList.add('tab_active');
    tabContent[i].classList.add('tab__content_active');
})  
}
