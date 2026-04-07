const counter = document.getElementById("counter");
if (counter) {
    let current = 0;
    let end = 24;

    function updateCounter() {
        current++;
        counter.textContent = current;
        
        if (current < end) {
            setTimeout(updateCounter, 80);
        }
    }
    updateCounter();
}