const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const ampm = document.querySelector(".ampm")
const date = new Date()

window.addEventListener("DOMContentLoaded", updateClock())

function updateClock() {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()


 
    hoursEl.textContent = hours < 10  ? "0"+hours :hours
    minutesEl.textContent = minutes < 10  ? "0"+minutes :minutes
    secondsEl.textContent = seconds < 10  ? "0"+seconds :seconds


}

setInterval(() =>{
    updateClock()
},1000)