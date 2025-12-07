const modal = document.getElementById('subscribe-modal');

if (!document.cookie.includes('modalClosed=true')) {
    modal.classList.add('modal_active');
}

document.querySelector('.modal__close').onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true; max-age=86400';
};