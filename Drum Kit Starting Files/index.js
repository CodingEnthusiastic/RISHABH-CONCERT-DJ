//verifies buttonclick event listener
var n=document.querySelectorAll('button').length;
for(var i=0;i<n;i++)
{
    // w a s d j k l 
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var innerText = this.innerHTML;
        geteventKeyboard(innerText);
        buttonAnimation(innerText);
    });
}

//event listener switch case if appropriate button or keyboard key is pressed
function geteventKeyboard(innerText)
{
    switch(innerText)
    {
        case 'w':
            var aud1=new Audio("./sounds/tom-1.mp3");
            aud1.play();
        break;
        case 'a':
            var aud2=new Audio("./sounds/tom-2.mp3");
            aud2.play();
        break;
        case 's':
            var aud3=new Audio("./sounds/kick-bass.mp3");
            aud3.play();
        break;
        case 'd':
            var aud4=new Audio("./sounds/snare.mp3");
            aud4.play();
        break;
        case 'j':
            var aud5=new Audio("./sounds/tom-3.mp3");
            aud5.play();
        break;
        case 'k':
            var aud6=new Audio("./sounds/crash.mp3");
            aud6.play();
        break;
        case 'l':
            var aud7=new Audio("./sounds/tom-4.mp3");
            aud7.play();
        break;
        default:
            console.log("Invalid Key by User");
    }
}

//verifies keyboard button click event listener
document.addEventListener("keypress",function(event){
    console.log(event.key);//event => object giving all info about key pressed and key var gives the exact key pressed by user
    geteventKeyboard(event.key);
    buttonAnimation(event.key);
});

//to get flashy animation to the user
function buttonAnimation(keypressed)
{
    var c=document.querySelector('.'+keypressed);
    // i will add class to this var c to apply css props written there
    c.classList.add("pressed");
    //timeout function kyu :- once i apply properties , whenever key will be pressed , it gets activated . but i want to restore my original button(original properties) after some time , so i need to use this setTimeout function where i remove the pressed class assigned to te variable
    setTimeout(function(){
        c.classList.remove("pressed");//pressed class applies some opacity indicating user that key is presssed
    },100);
}