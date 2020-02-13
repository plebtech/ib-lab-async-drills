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
            setTimeout(() => {
                console.log(w3);
                setTimeout(() => {
                    console.log(w4);
                }, 1000);
            }, 2000);
        }, 3000);
    }
    getWords("instant", "three", "two", "one");
}

function done() {
    console.log("Job's done!");
}
function countdown(num, callback) {
    if (num > 0) {
        console.log(num);
        setTimeout(() => {
            countdown(num - 1, callback);
        }, 1000);
    } else if (num === 0) {
        callback();
    } else {
        console.log("error");
    }
}
countdown(5, done);

let lunchTime = true;
function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            let lunchObj = {
                lunch: 'chicken wings',
                drink: 'heavy cream'
            }
            resolve(lunchObj);
        } else {
            let lunchErr = new Error('Not lunch!');
            reject(lunchErr);
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