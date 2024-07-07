// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.faq-accordion-item');
  
    accordionItems.forEach(item => {
      const button = item.querySelector('.arrow-button');
      const panel = item.querySelector('.faq-accordion-panel');
  
      button.addEventListener('click', () => {
        panel.classList.toggle('open');
      });
    });
  });
  
