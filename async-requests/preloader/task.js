const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onload = function() {
    loader.classList.remove('loader_active');
    
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const valutes = data.response.Valute;
        
        for (let code in valutes) {
            const valute = valutes[code];
            
            const item = document.createElement('div');
            item.className = 'item';
            
            const codeEl = document.createElement('div');
            codeEl.className = 'item__code';
            codeEl.textContent = valute.CharCode;
            
            const valueEl = document.createElement('div');
            valueEl.className = 'item__value';
            valueEl.textContent = valute.Value;
            
            const currencyEl = document.createElement('div');
            currencyEl.className = 'item__currency';
            currencyEl.textContent = 'руб.';
            
            item.appendChild(codeEl);
            item.appendChild(valueEl);
            item.appendChild(currencyEl);
            items.appendChild(item);
        }
    }
};