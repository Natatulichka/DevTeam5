import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function() {
    const accordion = new Accordion('.faq-accordion', {
        duration: 400,
        closeOthers: true,
    });

    const accordionItems = document.querySelectorAll('.faq-accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.faq-arrow-button');
        const panel = item.querySelector('.faq-accordion-panel');

        button.addEventListener('click', () => {
            button.classList.toggle('open'); // Додає або видаляє клас 'open' для зміни напрямку стрілочки
            panel.classList.toggle('open'); // Додає або видаляє клас 'open' для відображення відповіді
        });

        // Перевірка початкового стану панелі акордеону
        if (panel.style.display === 'block') {
            button.classList.add('open');
        }
    });
});
