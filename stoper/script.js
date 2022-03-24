const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const infoBtn = document.querySelector('.info')
const colorBtn = document.querySelector('.colors')
const closeBtn = document.querySelector('.close')
const stopWatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const modalShadow = document.querySelector('.modal-shadow')
const root = document.querySelector(':root')
const wrapper = document.querySelector('.wrapper')

let countTime;
let seconds = 0;
let minutes = 0;

const handleStart = () => {
    clearInterval(countTime)

    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++
            stopWatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopWatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopWatch.textContent = `${minutes}:00`

        }
    }, 1000)
}

const handlePause = () => {
    clearInterval(countTime)
}

const handleStop = () => {
    time.style.visibility = "visible"
    time.textContent = stopWatch.textContent;
    stopWatch.textContent = "0:00"
    seconds = 0;
    minutes = 0;
    clearInterval(countTime)

    const li = document.createElement("li")
    li.textContent = time.textContent;
    timeList.append(li)
}

const handleReset = () => {
    time.style.visibility = "hidden"
    stopWatch.textContent = "0:00"
    seconds = 0;
    minutes = 0;
    clearInterval(countTime)
    timeList.textContent = ""
}

const showHistory = () => {
    timeList.classList.toggle("show")
}

const showInfo = () => {
    modalShadow.style.display = "block"
    modalShadow.classList.toggle("modal-animation")
    // root.style.setProperty('--first-color', '#117e11')
    // root.classList.toggle("light")
}

const closeInfo = () => {
    modalShadow.style.display = "none"
    modalShadow.classList.toggle("modal-animation")
}
const changeColor = () => {
    root.classList.toggle("light")
    wrapper.classList.toggle("light")
}

startBtn.addEventListener("click", handleStart)
pauseBtn.addEventListener("click", handlePause)
stopBtn.addEventListener("click", handleStop)
resetBtn.addEventListener("click", handleReset)
historyBtn.addEventListener("click", showHistory)
infoBtn.addEventListener("click", showInfo)
colorBtn.addEventListener("click", changeColor)
closeBtn.addEventListener("click", closeInfo)