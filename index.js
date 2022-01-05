setInterval(() => {
   d= new Date();
   hourTime= d.getHours();
   minutesTime= d.getMinutes();
   secondsTime= d.getSeconds();

   hourRotation= 30*hourTime + minutesTime/2;
   minutesRotation= 6*minutesTime;
   secondsRotation=6*secondsTime;

   hour.style.transform=` rotate(${hourRotation}deg)`;
   minute.style.transform=` rotate(${minutesRotation}deg)`;
   second.style.transform=` rotate(${secondsRotation}deg)`;
}, 1000);