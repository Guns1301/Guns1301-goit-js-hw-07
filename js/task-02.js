const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// получаем ссылку на элемент по Id - <ul id="ingredients"></ul>


const ingredientsRef = document.getElementById('ingredients');// getElementById Возвращает ссылку на элемент по его идентификатору (ID); идентификатор является строкой, которая может быть использована для идентификации элемента; она может быть определена при помощи атрибута id в HTML или из скрипта.


// функция которая будет создавать элемент DOM и будет динамически получать значение из массива
const createIngredientsList = (ingredient) => {
  const itemOfIngridients = document.createElement('li');//создаем <li></li> тестовым значением которого будет itemOfIngridients.textContent = ingredient
  itemOfIngridients.textContent = ingredient; // то что приходит из массива
  
  return itemOfIngridients;
};

const ingredientsList = ingredients.map(element => createIngredientsList(element));
 console.log(ingredientsList)
ingredientsRef.append(...ingredientsList);