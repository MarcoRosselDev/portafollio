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

const areSomethinInLocalStorage = JSON.parse(localStorage.getItem("listOne"));

if (areSomethinInLocalStorage) {
  inputTextValue = areSomethinInLocalStorage;
  printD(inputTextValue);
}

toDoButton.addEventListener("click", function () {
  inputTextValue.push(inputText.value);
  inputText.value = "";
  localStorage.setItem("listOne", JSON.stringify(inputTextValue));
  printD(inputTextValue);
});

function printD(arr) {
  let printDomJustOneTime = "";
  for (let i = 0; i < arr.length; i++) {
    printDomJustOneTime += `<li>${arr[i]}</li>`;
  }
  ulPut.innerHTML = printDomJustOneTime;
}
