let numberToGuess = Math.floor(Math.random(0)*100)+1;

let theButton = document.querySelector('#mySubmit');
let answerSpace = document.querySelector('#answer');

var points=100;

//theButton.addEventListener('click', function(e){
  //  e.preventDefault();
    //guessNumber();}, false);

theButton.addEventListener('click', function(){ 
    guessNumber();});

                                      
function guessNumber(){ 
        let theGuess=document.querySelector("#myGuess").value;  
        points--;
        if (numberToGuess>theGuess){
             answerSpace.innerHTML = "Too low.";}
        else if (numberToGuess<theGuess){
             answerSpace.innerHTML = "Too High.";}
         else {
             answerSpace.innerHTML = "You win.  You earned "+points+" points.";}
        };
   

    



    

