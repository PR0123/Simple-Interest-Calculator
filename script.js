
//the button in html file has the onclick attribute set to "compute()"
function compute()
{
    var p = document.getElementById("principal")
    var principal = p.value
    // If the user enters zero or negative values, alert "Enter a positive number"
    if(principal <= 0){ 
        alert("Enter positive number"); 
        p.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100
    var yearsInt = parseInt(years) + 2021
    var result = document.getElementById("result")

    result.innerHTML = 
    "<br/><b>If</b> you deposit <span id='num'>"
    + principal 
    + "</span>,<br/><b>at</b> an interest rate of <span id='num'>" 
    +  rate
    + "%</span>.<br/><b>You</b> will receive an amount of <span id='num'>" 
    + interest
    + "</span>,<br/><b>in</b> the year <span id='num'>" 
    + yearsInt
    + "</span>"
}

//function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function readSlider()
{
    p = document.getElementById("rate").value;
    document.getElementById("display").innerHTML = p+"%";
}

