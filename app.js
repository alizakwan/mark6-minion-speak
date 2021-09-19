
var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");

console.log(txtinput);

function clickEventHandler() {
    console.log("clicked!");
    console.log("input", txtinput.value)
};

btntranslate.addEventListener("click", clickEventHandler)
