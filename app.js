var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong try again after some time");
}

function clickEventHandler() {
  var inputext = txtinput.value;
  fetch(getTranslationURL(inputext))
    .then((response) => {
      var res = response.json();
      return res;
    })
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

btntranslate.addEventListener("click", clickEventHandler);
