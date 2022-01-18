const light = document.querySelector("#light")
const clock = document.querySelector("#clock")
const dark = document.querySelector("#dark")
const hourHand = document.querySelector("[data-hour]")
const minuteHand = document.querySelector("[data-minute]")
const secondHand = document.querySelector("[data-second]")


light.addEventListener("click",()=>{
    clock.classList.remove("white")
    clock.classList.add("black")
    light.classList.remove("active")
    light.classList.add("desactive")
    dark.classList.remove("desactive")
    dark.classList.add("active")
    document.body.style.backgroundColor="#000"
})

dark.addEventListener("click", ()=>{
    clock.classList.remove("black")
    clock.classList.add("white")
    light.classList.remove("desactive")
    light.classList.add("active")
    dark.classList.remove("active")
    dark.classList.add("desactive")
    document.body.style.backgroundColor="#fff"
})  



setInterval(setClock, 1000)

function setClock(){
    const currentTime = new Date();
    const secondsTime = (currentTime.getSeconds() / 60);
    const minutesTime = (secondsTime + currentTime.getMinutes()) / 60;
    const hoursTime = (minutesTime + currentTime.getHours()) / 12
    rotateAxio(secondHand, secondsTime)
    rotateAxio(minuteHand, minutesTime)
    rotateAxio(hourHand, hoursTime)
}


function rotateAxio(element, rotation){
    element.style.setProperty("--rotation", rotation * 360)
}


setClock()
