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