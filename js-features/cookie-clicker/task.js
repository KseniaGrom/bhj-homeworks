let clickerTimer = document.getElementById('clicker__counter');
let clickerValue = 0;
clickerTimer.textContent = clickerValue;
let clickerElement = document.getElementById('cookie');
let activateClick = false;

clickerElement.addEventListener('click', function() {
    clickerValue++;
    clickerTimer.textContent = clickerValue;

    if (activateClick) {
        this.style.width = "200px";
        activateClick = false;
    } else {
        this.style.width = "250px";
        activateClick = true;
    }
})