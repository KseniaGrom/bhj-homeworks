const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const xhr = new XMLHttpRequest();
    const formData = new FormData(this);
    
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    };
    
    xhr.open('POST', this.action);
    xhr.send(formData);
});