const revealElements = document.querySelectorAll(
    ".story, .card, .collection-card, .value-box div, .review"
);

function reveal() {
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);