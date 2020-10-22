const hoursHand = document.querySelector('.hours .h')
const minutesHand = document.querySelector('.minutes .m')
const secondsHand = document.querySelector('.seconds .s')
const digital = document.querySelector('.digital')

function getTime() {
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var format = "AM"

    if (hours >= 12) {
        format = "PM"
    }

    if (hours > 12) {
        hours = hours - 12
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // console.log(`${hours}: ${minutes}: ${seconds} ${format}`)
    digital.textContent = `${hours}:${minutes}:${seconds} ${format}`

    hoursHand.style.transform = `rotateZ(${hours * 30}deg)`
    minutesHand.style.transform = `rotateZ(${minutes * 6}deg)`
    secondsHand.style.transform = `rotateZ(${seconds * 6}deg)`
    console.log(seconds)

    var isZero = false

    if (isZero == false) {
        if (seconds == 0) {
            isZero = true
        } else {
            isZero = false
            secondsHand.classList.add('transition')
            minutesHand.classList.add('transition')
            hoursHand.classList.add('transition')
        }
    } 
    if (isZero == true) {
        isZero = false
        secondsHand.classList.remove('transition')
    }
    
}

setInterval(getTime, 1000)