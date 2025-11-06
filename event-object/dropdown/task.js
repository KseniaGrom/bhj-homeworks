let listStatus = document.querySelector('.dropdown__value');
let listLists = document.querySelector('.dropdown__list');
let listLink = document.querySelectorAll('.dropdown__link');

listStatus.addEventListener('click', function(){
    listLists.classList.toggle('dropdown__list_active');
})

listLists.addEventListener('click', function(event){
    event.preventDefault();
    listLists.classList.remove('dropdown__list_active');
    listStatus.textContent = event.target.textContent;
})