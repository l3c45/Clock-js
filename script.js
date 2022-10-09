const time=document.getElementById("time")
const date=document.getElementById("date")
const secNeedle=document.querySelector(".second")
const minNeedle=document.querySelector(".minute")
const hourNeedle=document.querySelector(".hour")
const html=document.querySelector("html")
const button=document.querySelector(".theme")
let toggle=false

timer()

button.addEventListener("click",()=>{
    toggle=!toggle
    if(toggle){
        html.style.setProperty("--background", "black")
        html.style.setProperty('--text', "white")
    }else{
        html.style.setProperty("--background", "white")
        html.style.setProperty('--text', "black")
    }
})

function timer(){
    myFunc()
    setInterval(myFunc,1000)
 
    function myFunc(){
        const now=new Date
        let sec=now.getSeconds()
        let min=now.getMinutes()
        let hour=now.getHours()
        time.innerText=now.toLocaleTimeString()
        date.innerText=now.toLocaleDateString('es-ar',{ weekday:"long", month:"short", day:"numeric"})

        let secDeg=(sec*6)+180
        let minDeg=(min*6)+180
        let hourDeg=(hour>12?((hour-12)*30)+180+(min*.5):hour*30+180+minDeg)

        secNeedle.style.transform=`rotate(${secDeg}deg)`
        minNeedle.style.transform=`rotate(${minDeg}deg)`
        hourNeedle.style.transform=`rotate(${hourDeg}deg)`
    }
}
