window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Loading..');
    doStuff();
    console.log('Loaded.');
});

function doStuff() {

    function repeat(message) {
        console.log(`${message}`);
    }
    repeat("hello world");
    setTimeout(() => {
        repeat("hello again");
    }, 2000);

    function getWords(w1, w2, w3, w4) {
        console.log(w1);
        setTimeout(() => {
            console.log(w2);
        }, 3000);
        setTimeout(() => {
            console.log(w3);
        }, 2000);
        setTimeout(() => {
            console.log(w4);
        }, 1000);
    }
    getWords("one", "two", "three", "four");
}

function done() {
    console.log("Job's done!");
}
function countdown(num, callback) {
    if (num > 1) {
        console.log(num);
        num--;
        setTimeout(() => {
            countdown(num, callback);
        }, 1000);
    } else if (num === 1) {
        console.log(num);
        callback();
    } else {
        console.log("error");
    }
}
countdown(5, done);

let lunchTime = true;
function orderMeSomeFood() {
    let nope = new Error('Not lunch!');
    let myObject = {
        lunch: 'chicken wings',
        drink: 'heavy cream'
    }
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            resolve(myObject);
        } else {
            reject(nope);
        }
    });
}
function order() {
    orderMeSomeFood()
        .then((value) => {
            console.log(value);
        }).catch((err) => {
            console.log(err);
        });
}
order();
lunchTime = false;
order();