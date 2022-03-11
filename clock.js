const clock = document.querySelector(".clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    let daynight = "";

    if (hours < 13) {
        daynight = "오전"
    } else {
        daynight = "오후"
    };


   clock.innerText = `${daynight} ${hours}:${minute}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);