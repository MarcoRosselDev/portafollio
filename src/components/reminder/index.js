/* 
    <input type="text" placeholder="tipe something" />
    <button class="toDoButton">send</button>
    <button class="cleanButton">clean</button>
    <button class="cleanAllButton">clean all</button>

    <ul class="ulPut"></ul>

*/

const inputText = document.querySelector(".inputText");
const toDoButton = document.querySelector(".toDoButton");
const cleanButton = document.querySelector(".cleanButton");
const cleanAllButton = document.querySelector(".cleanAllButton");
const ulPut = document.querySelector(".ulPut");

let inputTextValue = [];

toDoButton.addEventListener("click", function () {
  inputTextValue = inputText.value;
  print(inputTextValue);
  inputText.value = "";
});

const print = (text) => {
  let printDomJustOneTime = "";
  for (let i = 0; i < text.length; i++) {
    printDomJustOneTime += `<li>${text[i]}</li>`;
  }
  ulPut.innerHTML = printDomJustOneTime;
};
