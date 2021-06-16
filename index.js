import CountdownTimer from "./timer.js"



const input = document.querySelector('#start')
const resetBtn=document.querySelector('.reset')
input.addEventListener('input', launchCountdown)
stopBtn.addEventListener('click', stopCountdown)

function launchCountdown() {
    let targetD=input.value
    let new1= new CountdownTimer({
        selector: '#timer-1',
        targetDate: targetD,
    });
    console.log(new1);

    new1.start()

    function stopCountdown() {
        new1.stop()
    }
}
