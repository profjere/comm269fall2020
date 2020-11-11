function changeBgColor(){
    var aColor = document.querySelector("#newColor").value;
    document.body.style.backgroundColor = aColor;
    document.querySelector("#theColor").innerHTML = "The background is now "+aColor+".";
}

x=document.querySelector("#newColor");
x.addEventListener("focusout", changeBgColor);
