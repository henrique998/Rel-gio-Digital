import '../src/styles/global.scss'
import '../src/styles/main.scss'

const timeTextEl = document.querySelector('[data-time]')

function bootStrap() {
    const now = new Date()

    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentSecond = now.getSeconds()

    const hourFormatted = String(currentHour).padStart(2, '0')
    const minuteFormatted = String(currentMinute).padStart(2, '0')
    const secondFormatted = String(currentSecond).padStart(2, '0')

    timeTextEl!.textContent = `${hourFormatted}:${minuteFormatted}:${secondFormatted}`
}

setInterval(bootStrap, 1000)