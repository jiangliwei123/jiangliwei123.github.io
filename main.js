function clickmuyu(){
    n++;
    document.getElementById("n").textContent=n;
    a.load();
    a.play();
    document.getElementsByTagName("img")[0].setAttribute("width","387px");
    setTimeout(() => {
        document.getElementsByTagName("img")[0].setAttribute("width","400px");
    }, 50);
}

function tftip(){
    document.getElementById("virtues").innerHTML='<span>click too fast!</span>';
    document.getElementById("n").innerHTML=" ";
    n-=3;
    setTimeout(() => {
        document.getElementById("virtues").innerHTML="<span>today's virtues:</span>";
        document.getElementById("n").innerHTML=n;
    }, 500);
}
var n = 0;
a = document.getElementById("audio");
a.volume=0.3;
