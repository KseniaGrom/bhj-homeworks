const tooltips = document.querySelectorAll('.has-tooltip');
let tooltip = document.querySelector('.tooltip');

if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
}

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        if (tooltip.textContent === this.title && tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            return;
        }
        
        tooltip.textContent = this.title;
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = rect.bottom + 'px';
        
        tooltip.classList.add('tooltip_active');
    });
}