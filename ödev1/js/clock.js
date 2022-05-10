let userName = prompt("İsminizi Giriniz")

document.getElementById("myName").innerHTML = userName;
function showTime() {
    let myclock = document.querySelector('#myClock')
    let dte = new Date();
    let hour = dte.getHours();
    let minute = dte.getMinutes();
    let second = dte.getSeconds();
    let gun = dte.getDay();
    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }
    myclock.innerHTML = `${hour}:${minute}:${second} ${gun}`
}
showTime();
setInterval(showTime, 1000);