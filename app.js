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

function countdown(num, callback) {
    console.log('bzrrt');
}