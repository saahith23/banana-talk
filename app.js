// var userName= prompt("enter your name");
// var welcomeMessage="welome "+userName;
// alert(welcomeMessage);
var btnTranslate= document.querySelector("#btnTranslate");
var txtInput= document.querySelector("#textarea");
var outputDiv = document.querySelector("#output");



function clickHandler()
{
    outputDiv.innerText = "kfgjhad;o"+ txtInput.value; 
};
btnTranslate.addEventListener("click",clickHandler)
