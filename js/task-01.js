
const categoriesRef = document.querySelectorAll('.item');
console.log(categoriesRef);

const amountOfCategories = categoriesRef.length;
console.log(`'В списке ${categoriesRef.length} категории.'`);

categoriesRef.forEach(element => {
    const titleText = element.firstElementChild.textContent;
    const quantityOfElements = element.lastElementChild.children.length;
    console.log(`Категория: ${titleText}\nКоличество элементов: ${quantityOfElements}`)
});