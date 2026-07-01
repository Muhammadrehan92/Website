const cards = document.querySelectorAll(".product-card");

function revealCards() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
console.log("Shop JS Loaded");

// ===========================
// Product Reveal Animation
// ===========================

const productCards = document.querySelectorAll(".product-card");

function revealProducts() {

    productCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("load", revealProducts);
window.addEventListener("scroll", revealProducts);

// ===========================
// Search Products
// ===========================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        productCards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ===========================
// Category Filter
// ===========================

const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {

        const value = this.value.toLowerCase();

        productCards.forEach(card => {

            const name = card.querySelector("h3").textContent.toLowerCase();

            if (value === "all categories" || value === name) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===========================
// Wishlist
// ===========================

const hearts = document.querySelectorAll(".product-icons i");

hearts.forEach(icon => {

    icon.addEventListener("click", function () {

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
// Shop Button
// ===========================

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = "Added ✓";

        this.disabled = true;

        setTimeout(() => {

            this.innerHTML = "Shop Now";

            this.disabled = false;

        }, 1500);

    });

});

// ===========================
// Sort Products
// ===========================

const sortSelect = document.getElementById("sortProducts");
const productGrid = document.querySelector(".product-grid");

if (sortSelect && productGrid) {

    sortSelect.addEventListener("change", function () {

        const cards = Array.from(productGrid.querySelectorAll(".product-card"));

        if (this.value === "Low Price") {

            cards.sort((a, b) => {

                return parseFloat(a.querySelector("p").innerText.replace("$", "")) -
                       parseFloat(b.querySelector("p").innerText.replace("$", ""));

            });

        }

        else if (this.value === "High Price") {

            cards.sort((a, b) => {

                return parseFloat(b.querySelector("p").innerText.replace("$", "")) -
                       parseFloat(a.querySelector("p").innerText.replace("$", ""));

            });

        }

        cards.forEach(card => productGrid.appendChild(card));

    });

}
