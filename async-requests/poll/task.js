const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        
        document.getElementById('poll__title').textContent = data.data.title;
        
        const answersDiv = document.getElementById('poll__answers');
        const answers = data.data.answers;
        
        for (let i = 0; i < answers.length; i++) {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answers[i];
            
            button.onclick = function() {
                alert('Спасибо, ваш голос засчитан!');
            };
            
            answersDiv.appendChild(button);
        }
    }
};