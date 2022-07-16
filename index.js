var number_drum=document.querySelectorAll('.drum').length;
for (var i=0;i<number_drum;i++)
{
document.querySelectorAll('button')[i].addEventListener("click",when_clicked);
}

function when_clicked()
{
      
    // this.style.color='#DBEDF3';
    var btn=this.innerHTML;
    buttonAnimation(btn);
    switch (btn) {
        case 'w':
             var audio = new Audio('sounds/crash.mp3');
             audio.play();
            break;
        case 'a':
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
            break;    
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;   
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;                  
        default:
            break;
    }
    
}

document.addEventListener('keypress', 
function evl(event)
 {
    var e_key=event.key;
    buttonAnimation(e_key);
    switch (e_key) {
        case 'w':
             var audio = new Audio('sounds/crash.mp3');
             audio.play();
            break;
        case 'a':
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
            break;    
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;   
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;                  
        default:
            break;

}   })

function buttonAnimation(currentkey)
{
    var active_btn=document.querySelector("."+currentkey);
    active_btn.classList.add("pressed");
    setTimeout(function()
    {
        active_btn.classList.remove("pressed");
    },150)

}