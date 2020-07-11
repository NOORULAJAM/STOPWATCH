var sec=0;
var min=0;
var hr=0;
var interval;
function time(){
    sec++;
    var wsec = document.getElementById("bsec");
    wsec.innerHTML=sec;
    if(sec > 60)
    {
        min++;
        var wmin = document.getElementById("bmin");
        wmin.innerHTML=min;
        sec=0;
    }
    else if(min > 60)
    {
        var whr = document.getElementById("bhr");
        whr.innerHTML=hr;
        min=0;
    }
}

function start()
{
    var dis=document.getElementById("buton")
    dis.disabled = true;
    interval = setInterval(time,1000);
    var audio= document.getElementById("audio")
    var but= document.getElementById("button")
    but.addEventListener("click", function(){ audio.play(); }); 
}
function pause()
{
    clearInterval(interval);
    var dis=document.getElementById("buton")
    dis.disabled = false;
    var audio= document.getElementById("audio")
    var but= document.getElementById("pasue")
    but.addEventListener("click", function(){ audio.pause(); }); 
    but.L
}
function reset()
{
    sec=0;
    min=0;
    hr=0;
    var whr = document.getElementById("bhr");
    var wmin = document.getElementById("bmin");
    var wsec = document.getElementById("bsec");
    wsec.innerHTML=0;
    wmin.innerHTML=0;
    whr.innerHTML=0;
    clearInterval(interval);
    var dis=document.getElementById("buton")
    dis.disabled = false;

}