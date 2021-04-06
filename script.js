

function compute()
{
    var principal = document.getElementById("principal").value
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100

if principal.value <= 0 {
    alert("Enter a positive number")
}

    document.getElementById("result").innerHTML = 
    "If you deposit" 
    + principal 
    + ",at an interest rate of " 
    +  rate
    +"%.You will receive an amount of " 
    + interest
    + ",in the year" 
    + 2021+years

    
    
}


function readSlider()
{
    p = document.getElementById("rate").value;
    document.getElementById("display").innerHTML = p;

}

