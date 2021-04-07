const inputDivRef = document.querySelector('[type="number"]');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");
// console.dir(inputDivRef);
// console.log(btnRenderRef);
// console.log(btnDestroyRef);
// console.log(boxesRef);

btnRenderRef.addEventListener("click", () => createBoxes(inputDivRef.value));
btnDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    // 2-ий варіант
    let r = () => (Math.random() * 256) >> 0;
    newBox.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
    //   "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    newBoxes.push(newBox);
  }
  boxesRef.append(...newBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}