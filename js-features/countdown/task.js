let timer = document.getElementById('timer');
let timerValue = 10;
timer.textContent = timerValue;

let timerEnd = setInterval(function() {
    if (timerValue > 0) {
          timerValue = timerValue - 1;
          timer.textContent = timerValue;
    } else {
        clearInterval(timerEnd)
        alert("Вы победили в конкурсе!")
    }
},1000)
