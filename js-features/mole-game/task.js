let killMole = document.getElementById('dead');
let killMoleCount = 0;
killMole.textContent = killMoleCount;
let missMole = document.getElementById('lost');
let missMoleCount = 0;
missMole.textContent = missMoleCount;
let holes = document.getElementsByClassName('hole');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', function () {
        if (this.className.includes('hole_has-mole')){
            killMoleCount++;
            killMole.textContent = killMoleCount;
        } else {
            missMoleCount++;
            missMole.textContent = missMoleCount;
        }

        if (killMoleCount === 10){
            setTimeout(() => {
                alert("Вы победили!");
                killMoleCount = 0;
                killMole.textContent = killMoleCount;
                missMoleCount = 0;
                missMole.textContent = missMoleCount;
            },20)
        } else if (missMoleCount === 5) {
            setTimeout(() => {
                alert("Вы проиграли!");
                killMoleCount = 0;
                killMole.textContent = killMoleCount;
                missMoleCount = 0;
                missMole.textContent = missMoleCount;
            },20)
        }
    })
}