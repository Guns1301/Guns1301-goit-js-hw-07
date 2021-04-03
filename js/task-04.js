// 1. Получаем ссылку на элемент. document.queryselector() 
// 2. 
// 3. Создаем  функцию
// 4. 
// 5. Вызывается функция по событию - например клика

//1. Получаем ссылки на элементы
const counterRef = document.getElementById('value');
console.log(counterRef);
const decrBtnRef = document.querySelector('[data-action="decrement"]');
const incrBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;
 const decrement = () => {
counterValue -= 1;
    counterRef.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;// увеличивает значение 
    counterRef.textContent = counterValue; // изменяет значение по ссылке 
 };

//  вешаем слушатель событий. При каком событии должена будет выполниться функция 
decrBtnRef.addEventListener('click', () =>  decrement() ); // не ожидает аргумент, передавать не нужно
incrBtnRef.addEventListener('click', () => increment()); // не ожидает аргумент, передавать не нужно

// Свойство dataset - объект всех дата атрибутов которые на них находятся
console.log(decrBtnRef.dataset.action); // action идет как ключ , а decrement как свойсвто значения {action : decrement}

// второй метод получить тоже самое - getAttribute('data-action')