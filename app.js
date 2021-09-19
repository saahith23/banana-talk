// var userName= prompt("enter your name");
// var welcomeMessage="welome "+userName;
// alert(welcomeMessage);
var btnTranslate= document.querySelector("#btnTranslate");
var txtInput= document.querySelector("#textarea");
var outputDiv = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    var url= serverURL +"?"+"text=" +text;
   console.log(url);
   return url
   
}

function errorHandler(error){
    console.log("error occured",error)
    alert('something wrong try again later');
}
function clickHandler()
{
    //
    var inputText= txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputDiv.innerText = translatedText ; 
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)
