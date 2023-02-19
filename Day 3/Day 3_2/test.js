const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const out1 = document.getElementById('output1');
const clr = document.getElementById('tbuser');
// const out2 = document.getElementById('output1');
var output = txt1.value;

function fun1(){
    out1.innerHTML = output + " " + txt1.value;
    output = output + " " + txt1.value;
    clr.value = '';
}

function fun2(){
    out1.innerHTML = '';
    output ='';
}

btn1.addEventListener('click', fun1);
btn2.addEventListener('click', fun2);

function changeImage()
{
    var image = document.getElementById('myImage');

    if(image.src.match("red.png"))
    {
        image.src = "yellow.png";
    }
    else if(image.src.match("yellow.png"))
    {
        image.src="blue.png";
    }
    else if(image.src.match("blue.png"))
    {
        image.src = "pink.png";
    }
    else if(image.src.match("pink.png"))
    {
        image.src = "brown.png";
    }
    else
    {
        image.src = "red.png";
    }
}