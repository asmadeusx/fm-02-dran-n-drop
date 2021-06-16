'use strict';

const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

// Обработчик событий на НАЧАЛО перемещения
item.addEventListener('dragstart', dragStart);
// Обработчик событий на КОНЕЦ перемещения
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
    // Событие когда перетаскиваемый элемент находится над Placeholder'ом куда мы можем поместить
    placeholder.addEventListener('dragover', dragover); 
    // Событие когда перетаскиваемый элемент заходим на территорию Placeholder'а куда мы можем поместить
    placeholder.addEventListener('dragenter', dragenter); 
    // Событие когда перетаскиваемый элемент покидает территорию Placeholder'а куда мы можем поместить
    placeholder.addEventListener('dragleave', dragleave); 
    // Событие когда перетаскиваемый элемент опустили на территорию Placeholder'а
    placeholder.addEventListener('drop', dragdrop); 
    
}

// Оглашение Функций
// Действия при НАЧАЛЕ перемещения
function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);    
}
// Действия при КОНЦЕ перемещения
function dragEnd(event) {
    event.target.classList.remove('hold', 'hide');
}
// Действия при нахождение над Placeholder'ом
function dragover(event) {
    event.preventDefault();
}
// Действия при входе на территорию Placeholder'а
function dragenter(event) {
    event.target.classList.add('hovered');
}
// Действия при уходе с территории Placeholder'а
function dragleave(event) {
    event.target.classList.remove('hovered');
}
// Действия когда остались на территории Placeholder'а
function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}