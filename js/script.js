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

const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (textarea && charCount) {
    textarea.addEventListener("input", function () {
        const length = textarea.value.length;
        charCount.textContent = length + " / 500";
    }
    );
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}