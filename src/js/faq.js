import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function() {
    
    const faqAccordion = new Accordion('.faq-accordion', {
        duration: 400,
        showMultiple: true,
        elementClass: 'faq-accordion-item',
        triggerClass: 'question-wrapper',
        panelClass: 'faq-accordion-panel',
    });

  

    const accordionItems = document.querySelectorAll('.faq-accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.faq-arrow-button');
        const panel = item.querySelector('.faq-accordion-panel');

        button.addEventListener('click', () => {
            button.classList.toggle('open'); 

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('open');
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.classList.add('open');
            }
        });

        
        if (panel.style.display === 'block') {
            button.classList.add('open');
        }
    });
});
