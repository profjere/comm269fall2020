

let theButton = document.querySelector('#mySubmit');
let answerSpace = document.querySelector('#answer');




theButton.addEventListener('click', function(){ 
    determineTip();});

                                      
function determineTip(){ 
        var mealCost=parseFloat(document.querySelector("#mealCost").value);  
        var tip=mealCost*.15;
        tip=parseFloat(tip.toFixed(2));
        var finalCost=mealCost+tip;
    answerSpace.innerHTML=mealCost + " plus "+tip+" equals "+finalCost+".";
               };
   

    



    

