const counter = document.getElementById("counter");
if (counter) {
let start = 0;
let end = 24;

function updateCounter() {
    if (start < end) {
        start++;
        counter.textContent = start;
        setTimeout(updateCounter, 195);
    }
}

updateCounter();
}