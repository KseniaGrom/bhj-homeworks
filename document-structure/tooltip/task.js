const tooltips = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        const currentTitle = this.title;
        
        if (tooltip.classList.contains('tooltip_active') && 
            tooltip.textContent === currentTitle) {
            tooltip.classList.remove('tooltip_active');
            return;
        }
        
        tooltip.textContent = currentTitle;
        tooltip.classList.add('tooltip_active');
    });
}