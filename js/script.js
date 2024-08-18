document.getElementById("btn").onclick = function(){

document.getElementById("heading").innerText ="I'm Learning  js"
document.getElementById("heading").style.backgroundColor ="red";
document.getElementById("heading").style.color="white";
}

document.getElementById("btn-reset").onclick = function(){

    document.getElementById("heading").innerText ="Learning JavaScrit"
    document.getElementById("heading").style.backgroundColor ="transparent";
    document.getElementById("heading").style.color="black";
}

document.getElementById("light-on").onclick = function(){
     document.getElementById("img-bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif"
}

document.getElementById("light-off").onclick = function(){
     document.getElementById("img-bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif"
    /* document.body.style.backgroundColor = "black";*/
}
//window.alert('You are underattacked Maa Ki Choot Terii Pent Utar')
//document.getElementById("heading").innerHTML = "<i>Text changed as innerText</i>"
document.write("<h1>Text Written in document write method</h1>")

console.log("log")
var firstname = "Muhammad Azib"
var lastname = "Sindhu"
var fullname = firstname + lastname
console.log(firstname + lastname)

document.getElementById
