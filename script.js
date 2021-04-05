

function compute()
{
    p = document.getElementById("principal").value;
    
    principal = document.getElementById("principal").value ?? 0;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100

    
    
}

function readSlider()
{
    alert("asdf");
    p = document.getElementById("rate").value;
    document.getElementById("display").innerHTML = p;

}

