var principal = document.getElementById("principal").value ?? 0;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100


function compute()
{
    p = document.getElementById("principal").value;
    
}

function readSlider()
{
    alert("asdf");
    p = document.getElementById("rate").value;
    document.getElementById("display").innerHTML = p;

}

