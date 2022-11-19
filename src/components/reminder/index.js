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
  ulPut.innerHTML += `<li>${inputTextValue}</li>`;
  inputText.value = "";
});
