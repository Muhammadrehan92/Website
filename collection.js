console.log("Collection JS Loaded");

// ===========================
// Scroll Reveal Animation
// ===========================

const cards = document.querySelectorAll(".collection-card");

function revealCards() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("load", revealCards);
window.addEventListener("scroll", revealCards);

// ===========================
// Collection Hover Button
// ===========================

const buttons = document.querySelectorAll(".collection-card button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = "Opening...";

        setTimeout(() => {

            alert("Collection Opened Successfully!");

            this.innerHTML = "Explore";

        }, 800);

    });

});

// ===========================
// Wishlist
// ===========================

const hearts = document.querySelectorAll(".collection-card .fa-heart");

hearts.forEach(heart => {

    heart.addEventListener("click", function () {

        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");

        if (this.classList.contains("fa-solid")) {

            this.style.color = "red";

        } else {

            this.style.color = "";

        }

    });

});

// ===========================
// Image Zoom
// ===========================

const images = document.querySelectorAll(".collection-card img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});