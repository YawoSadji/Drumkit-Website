var drumLength = document.querySelectorAll(".drum").length;
function makesound(key){
    switch (key) {
        case "w":
           var crash = new Audio("crash.mp3");
           crash.play();
           break;

        case "d":
            var tomFirst = new Audio("tom1.mp3");
            tomFirst.play();
            break;
           
        case "j":
            var tomSecond = new Audio("tom2.mp3");
            tomSecond.play();
            break;
    
        case "k":
            var tomThird = new Audio("tom3.mp3");
            tomThird.play();
            break;
    
        case "l":
            var tomFourth = new Audio("tom4.mp3");
            tomFourth.play();
            break;
    
    
        case "a":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
    
        case "s":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
    
        default:
            console.log(buttonInnerHtml);
    }

}
for(i=0; i<drumLength; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var buttonInnerHtml = this.innerHTML;
            makesound(this.innerHTML);
            buttonAnimation(this.innerHTML);
            }
        )};
    
   
    document.addEventListener("keydown",function(event){
        var eventkey = event.key;
        makesound (eventkey);
        buttonAnimation (eventkey);
    
    });
    
    function buttonAnimation(currentKey){
     var activeButton = document.querySelector("." + currentKey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100);
    }