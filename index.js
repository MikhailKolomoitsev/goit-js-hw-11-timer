class CountdownTimer{

    constructor(selector, targetDate) {
        this.selector = selector;
        this. targetDate=targetDate
    }
    
    const time=targetDate.getTime()-Date.now()
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);
}

// const new1=new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });

// const time = new1.targetDate.getTime() - Date.now()
console.log(new Date('Jul 17, 2021').getTime());
console.log( Date.now());

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);