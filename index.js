/*create three variable for stopwatch if stopwatch is stop for this
initilize stop value true,for second variable s=0;,minute variable min=0; and hour variable hr also zero*/


var stop =true;
var s=0;
var min=0;
var hr=0;
//function for start the timer
function start(){
    
  if(stop==true){
    stop=false;
    time();
  }  
}
// timer function
function time(){
if(stop==false){
    s=parseInt(s);
    min=parseInt(min);
    hr=parseInt(hr);
    s++;
    if(s==60){
        s=0;
        min++;
    }
    if(min==60){
      min=0;
      hr++;  
    } if(s<10){
        s="0"+s;
    }if(min<10){
        min="0"+min;
    }if(hr<10){
        hr="0"+hr;
    }

    count.innerHTML=hr+":"+min+":"+s;

    setTimeout("time(),1000");
}
//function for stop the stopwatch
}function isStop(){
    stop=true;
}
//function for reset the stopwatch
function reset(){
    stop=true;
    s=0;
    min=0;
    hr=0;
    
    count.innerHTML="00 : 00 : 00";
}