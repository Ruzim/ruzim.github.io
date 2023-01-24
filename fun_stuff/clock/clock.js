let oClock = document.querySelector("#simClock");
let oHour = document.querySelector("#_hour");
let oMinute = document.querySelector("#_minute");
let oSec = document.querySelector("#_sec");

for(let i=1; i<9; i++){
    oH = document.createElement('div');
    oH.className='tick';
    if (i<3) {
        oH.style.transform = 'rotate('+30*i+'deg)';
    }
    else if (i<5) {
        oH.style.transform = 'rotate('+30*(i+1)+'deg)';
    }else if (i<7) {
        oH.style.transform = 'rotate('+30*(i+2)+'deg)';
    }else {
        oH.style.transform = 'rotate('+30*(i+3)+'deg)';
    }
    oClock.appendChild(oH);
}

let run=() => {
    let oDate = new Date();
    let iH = oDate.getHours();
    let iM = oDate.getMinutes();
    let iS = oDate.getSeconds();
    iH = iH%12;
    let hourRotation = 30.*(iH + iM/60.);
    let minuteRotation = 6.*(iM + iS/60.);
    oHour.style.transform = 'translateY(-100%) rotate('+hourRotation+'deg)';
    oMinute.style.transform = 'translateY(-100%) rotate('+minuteRotation+'deg)';
    oSec.style.transform = 'translateY(-100%) rotate('+6*iS+'deg)';
}
run();
//console.log(3%12);
setInterval(run,500);
