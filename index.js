class CountdownTimer{
    constructor({ selector, targetDate } ) {
        this.targetDate = targetDate;
        this.timerId = null;
        this.timer= document.querySelector(selector)
    }
      start() {
        const target = new Date(this.targetDate)
        this.timerid = setInterval(() => {
        const currentDate = Date.now();
        const diffTime = target - currentDate;
        const { days, hours, mins, secs } = CountdownTimer.getAllTimeComponents(diffTime);
        CountdownTimer.changeLayout({ days, hours, mins, secs }, this.timer);
    }, 500);
    }
    static pad(timeValue) {
        return String(timeValue).padStart(2, '0');
    }
    static getAllTimeComponents(time){
    const days = CountdownTimer.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = CountdownTimer.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = CountdownTimer.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = CountdownTimer.pad(Math.floor((time % (1000 * 60)) / 1000));
    console.log({days, hours, mins, secs});
    return {days, hours, mins, secs}
    }

    static changeLayout({ days, hours, mins, secs }, layoutSelector) {
        const daysSelector = layoutSelector.querySelector('span[data-value="days"]')
        daysSelector.textContent = days
        const hoursSelector = layoutSelector.querySelector('span[data-value="hours"]')
        hoursSelector.textContent = hours
        const minsSelector = layoutSelector.querySelector('span[data-value="mins"]')
        minsSelector.textContent = mins
        const secsSelector = layoutSelector.querySelector('span[data-value="secs"]')
        secsSelector.textContent=secs
    }
}

const new1= new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'Jul 17, 2021',
});

new1.start()