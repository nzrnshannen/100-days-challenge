function changeColor(element)
{
    var currentColor = element.style.backgroundColor;
    if(currentColor=="red")
    {
        element.style.backgroundColor = "green";
    }
    else if(currentColor=="green")
    {
        element.style.backgroundColor = "black";
    }
    else if(currentColor=="black")
    {
        element.style.backgroundColor = "yellow";
        document.getElementById('color').style.color= "black";
    }
    else if(currentColor=="yellow")
    {
        element.style.backgroundColor = "blue";
        document.getElementById('color').style.color = "white";
    }
    else if(currentColor == "blue")
    {
        element.style.backgroundColor = "violet";
    }
    else
    {
        element.style.backgroundColor = "red";
    }
}