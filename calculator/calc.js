

let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let answerSpace = document.querySelector('#answer');


add.addEventListener('click', function(){ 
    compute(1);});
subtract.addEventListener('click', function(){ 
    compute(2);});
multiply.addEventListener('click', function(){ 
    compute(3);});
divide.addEventListener('click', function(){ 
    compute(4);});

                                      
function compute(operation){ 
        var  num1=parseFloat(document.querySelector("#num1").value);  
        var num2=parseFloat(document.querySelector("#num2").value);  
        if (operation==1){
            var answer=num1+num2;}
         if (operation==2){
            var answer=num1-num2;}
     if (operation==3){
            var answer=num1*num2;}
     if (operation==4){
            var answer=num1/num2;}
    
    answerSpace.innerHTML=answer;
   

}



    

