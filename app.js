
var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output=document.querySelector("#output")

console.log(txtinput);

function clickEventHandler() {
  

    output.innerText= "banabanaban"+txtinput.value
};

btntranslate.addEventListener("click", clickEventHandler)
