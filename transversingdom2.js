var parent = document.getElementById("parent");
var firstchild = parent.firstElementchild;
// console.log(firstchild);
// firstchild.setAttributes("class","first");
// var h2tag = document.getElementsByTagName("h2");
// console.log(h2tag);
// h2tag[0].setAttribute("class","first");
var newli = document.createElement("li");
var textnode = document.createTextNode("ape");
newli.append(textnode);
newli.setAttribute("class","first");
parent.append(newli);
parent.replaceChild(newli, firstchild);
parent.removeChild(second);
console.log(newli);
// firstchild.style.colour = "00ff00";
// firstchild.style.fontSize = "100px";
var buttonode = document.getElementById("clickme");
buttonode.addEventListener("click",clickhandler);
function clickhandler(){
   alert("You just click")
}
