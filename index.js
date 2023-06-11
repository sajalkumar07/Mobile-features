var circle = document.getElementById("circle");
var upBtn = document.getElementById("UpBtn");
var downBtn = document.getElementById("DownBtn");

var rotateVlaue = circle.style.transform;
var rotateSum;

upBtn.onclick = function()
{
    rotateSum = rotateVlaue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateVlaue = rotateSum;
}

downBtn.onclick = function()
{
    rotateSum = rotateVlaue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
    rotateVlaue = rotateSum;
}