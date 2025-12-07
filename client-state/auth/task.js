const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');

if (localStorage.user_id) {
    userId.textContent = localStorage.user_id;
    document.getElementById('welcome').classList.add('welcome_active');
} else {
    document.getElementById('signin').classList.add('signin_active');
}

form.onsubmit = function(e) {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.action);
    
    xhr.onload = function() {
        const res = JSON.parse(xhr.responseText);
        if (res.success) {
            localStorage.user_id = res.user_id;
            userId.textContent = res.user_id;
            document.getElementById('signin').classList.remove('signin_active');
            document.getElementById('welcome').classList.add('welcome_active');
        } else {
            alert('Неверный логин/пароль');
        }
    };
    
    xhr.send(new FormData(form));
};