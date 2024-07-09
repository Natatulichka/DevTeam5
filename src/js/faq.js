import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function() {
    
    const faqAccordion = new Accordion('.faq-accordion', {
        duration: 400,
        showMultiple: true,
        elementClass: 'faq-accordion-item',
        triggerClass: 'question-wrapper',
        panelClass: 'faq-accordion-panel',
    });
});
