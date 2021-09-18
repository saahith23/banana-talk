// var userName= prompt("enter your name");
// var welcomeMessage="welome "+userName;
// alert(welcomeMessage);
var btnTranslate= document.querySelector("#btnTranslate");
var txtInput= document.querySelector("#textarea");
console.log("txtInput");
function clickHandler()
{
    console.log("clicked!");
    console.log("input", txtInput.value);
};
btnTranslate.addEventListener("click",clickHandler)
