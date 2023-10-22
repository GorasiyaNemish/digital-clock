let second = document.getElementById('second');
let mm = document.getElementById('mm');
let hh = document.getElementById('hh');
let ampm = document.getElementById('ampm');
function setClockTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    // alert(d);
    let ap;
    s =  s < 10 ? '0' + s : s;
    m =  m < 10 ? '0' + m : m;
    if(h>=12){
        h-=12;
        ap = "PM";
    }else{
        ap = "AM";
    }
    h =  h < 10 ? '0' + h : h;
    
    mm.innerHTML = m;
    hh.innerHTML = h;
    ampm.innerHTML = ap;
    let ss1 = document.getElementById('ss1');
    let ss2 = document.getElementById('ss2');
    let ss3 = document.getElementById('ss3');
    if(s%2==0){
        ss3.innerHTML=s;
        ss1.style.transform = "translateY(-100%)";
        ss2.style.transform = "translateY(-100%)";
        ss3.style.transform = "translateY(-100%)";
    }
    else{
        ss1.innerHTML=s;
        ss1.style.transform = "translateY(100%)";
        ss2.style.transform = "translateY(100%)";
        ss3.style.transform = "translateY(100%)";
    }
}

setInterval(setClockTime, 1000);
