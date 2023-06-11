// Get DOM elements for timerDisplay and buttons
let timerDisplay = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

// Initialize timer variables
let msec = 00;
let secs = 00;
let mins = 00;
let hrs = 00;
let timerId = null;

// Event handler for the start button
startBtn.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
    timerDisplay.style.color = 'green'; // Change color to green when started
});

// Event handler for the stop button
stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerDisplay.style.color = 'red'; // Change color to red when stopped
});

// Event handler for the reset button
resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00 : 00';
    hrs = msec = secs = mins = 0;
    timerDisplay.style.color = 'white'; // Change color to white on reset
});

// Function to start the timer
const startTimer = () => {
    msec++;
    //reset ms, sec, mins and hours to 0 when they reach 1000 and 60 resp and increase the count of the next bigger unit of time
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
            if (mins === 60) {
                mins = 0;
                hrs++;
            }
        }
    }
    // Format the time values with leading zeros if necessary
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;
    // Update the timer display with the formatted time values
    timerDisplay.innerHTML = `${hrsString} : ${minsString} : ${secsString} : ${msecString}`;
};
