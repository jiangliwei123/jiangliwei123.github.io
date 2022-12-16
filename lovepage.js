document.body.style.cursor = "url(https://tva1.sinaimg.cn/large/008vxvgGly1h9386kc3ywj305k05kt8j.jpg)";

function getTimeDifference(){
    var startDate = new Date("2021-12-25");
    var currentDate = new Date();
    var timeDifference = currentDate.getTime() - startDate.getTime();
    var daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;}