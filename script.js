

function compute()
{
    var p = document.getElementById("principal")
    var principal = p.value
    

    if(principal <= 0){ 
        alert("Enter positive number"); 
        p.focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100



    var result = document.getElementById("result")
    result.innerHTML = 
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

