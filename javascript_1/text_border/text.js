var currentSize = 1.0;
var borderStatus =false;

var plus=document.querySelector("#up");
var minus=document.querySelector("#down");
var bird=document.querySelector("#bird");

function changeSize(direction){
    currentSize = currentSize + .01*direction; 
    document.querySelector("#p1").style.fontSize = currentSize+"em";
}

plus.addEventListener("click", function(){
  changeSize(1);
});

minus.addEventListener("click", function(){
  changeSize(-1);
});


bird.addEventListener("click", function(){
  if (!borderStatus){
      document.querySelector("#bird").style.border = "2px solid #00f";
      document.querySelector("#bird").style.padding = "0"; 
      borderStatus=true;
  } else {
      document.querySelector("#bird").style.border = "0px solid #000";
      document.querySelector("#bird").style.padding = "2px"; 
      borderStatus=false;
  }
});


