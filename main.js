function clickmuyu(){
    n++;
    document.getElementById("n").textContent=n;
    var a = new Audio();
    a.src="muyu2.mp3";
    a.volume=0.3;
    a.play();
    document.getElementsByTagName("img")[0].setAttribute("width","390px");
    setTimeout(() => {
        document.getElementsByTagName("img")[0].setAttribute("width","400px");
    }, 50);
}

var n = 0;

