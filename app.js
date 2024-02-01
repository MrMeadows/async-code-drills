// Timing Out

function logMessage (msg) {
    console.log(msg);
    setTimeout(function () {
        console.log("behold my awesome powers!")},2000);
}

function getWords() {
    setTimeout(function () {
        console.log('apple');
    },0);
    setTimeout(function () {
        console.log('bottle');
    },3000);
    setTimeout(function () {
        console.log('dreams');
    },5000);
    setTimeout(function () {
        console.log('boops');
    },6000);
}

// Callback Recursion

function done() {
    console.log('Job\'s done!');
}

/* The goal of this function will be to log a "countdown" from the 
number (num) passed in as an argument, delayed by 1 second each time, 
and when it gets to 1, it should execute the callback argument */

function countdown(num, callback) {

    setTimeout(function() {
        if (num > 0) {
            console.log(num);
            countdown(num - 1, callback)
        } else {
            callback();
        }
    },1000)
}

countdown(5, done);