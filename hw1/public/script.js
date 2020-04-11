var day = new Date("May 10, 2020 17:00:00").getTime();
var day2 = day/1000;
var display = setInterval(function() {

    var today = new Date().getTime();
    var today_now = today/1000;
    var sec = day2 - today_now;

    document.getElementById("timer").innerHTML = Math.floor(sec).toLocaleString();

    if (sec < 0){
        clearInterval(display);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

var count = 0;

for(let i=0; i<4; i++){
    document.getElementsByClassName('firstc')[i].addEventListener('click', () => active(i));
}

function active(i){
    document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("default", "hidden");
    document.getElementsByClassName('mySlides')[i].className = document.getElementsByClassName('mySlides')[i].className.replace("hidden", "default");
    document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("default", "light");
    document.getElementsByClassName('firstc')[i].className = document.getElementsByClassName('firstc')[i].className.replace("light", "default");
    count = i;
}




for(let i=0; i<4; i++){
    document.getElementsByClassName('left')[i].addEventListener('click', () => leftarrow(i));
    
}

function leftarrow(i){

    document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("default", "hidden");
    document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("default", "light");
    if(i===0){
        count=3
        document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("hidden", "default");
        document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("light", "default");
      
    }
    else{
        count = count-1;
        document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("hidden", "default");
        document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("light", "default");
    }
}

for(let i=0; i<4; i++){
    document.getElementsByClassName('right')[i].addEventListener('click', () => rightarrow(i));
}

function rightarrow(i){

    document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("default", "hidden");
    document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("default", "light");
    if(i===3){
        count=0
        document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("hidden", "default");
        document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("light", "default");
      
    }
    else{
        count = count+1;
        document.getElementsByClassName('mySlides')[count].className = document.getElementsByClassName('mySlides')[count].className.replace("hidden", "default");
        document.getElementsByClassName('firstc')[count].className = document.getElementsByClassName('firstc')[count].className.replace("light", "default");
    }
}


