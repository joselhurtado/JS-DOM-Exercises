//Code Already Compiled
window.onload = function() {
    console.log("The Page was Loaded...");
let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let mySelect = document.querySelector('#mySelect');
    for(let country of countries) {
        mySelect.innerHTML += `<option value=" ">${country}</option>`;
        }
    };