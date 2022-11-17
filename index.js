//For Mouse Clicks
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}
//Other way to write is by using anonymous functions
// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

function handleclick()
{
    var letter = this.innerHTML;
    MakeSound(letter);
    Animation(letter);
//    this.style.color="white";
}


//For Keyboard Presses
document.addEventListener("keydown",function(event){
    // event is the pressing of the key name needn't be event; can be anything.
    MakeSound(event.key);
    Animation(event.key);
});

//For Making the Sounds
function MakeSound(key){
    switch(key)
    {
        case "w":
         var tom1=new Audio("tom-1.mp3");
         tom1.play(); 
         break;

        case "a":
            var tom2=new Audio("tom-2.mp3");
            tom2.play(); 
            break;

        case "s":
            var tom3=new Audio("tom-3.mp3");
            tom3.play(); 
            break;

        case "d":
            var tom4=new Audio("tom-4.mp3");
            tom4.play(); 
            break;
        
        case "j":
            var snare=new Audio("snare.mp3");
            snare.play(); 
            break;
        
        case "k":
            var crash=new Audio("crash.mp3");
            crash.play(); 
            break;

        case "l":
            var kick=new Audio("kick-bass.mp3");
            kick.play(); 
            break;

        default: console.log(letter);
      }    //    alert("key pressed");
    
}
function Animation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
        }, 100);

}
