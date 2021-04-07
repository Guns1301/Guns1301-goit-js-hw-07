const validationInputRef = document.getElementById('validation-input');
// console.dir(validationInputRef);

const dataLengthStr = validationInputRef.attributes['data-length'].value;
const dataLength = parseInt(dataLengthStr);
// console.log(dataLength);

validationInputRef.addEventListener('blur', addRemoveClassOnInput)

function addRemoveClassOnInput() {
const inputValueLength = validationInputRef.value.length;
    //   console.log(inputValueLength);
    if (inputValueLength === dataLength) {
   changeClass('valid', 'invalid')
    }
    else {
    changeClass('invalid', 'valid')
    };
};

const changeClass = (add, remove) => {
    validationInputRef.classList.add(add);
    validationInputRef.classList.remove(remove);
 };