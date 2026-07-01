console.log("Contact JS Loaded");

// ===============================
// Scroll Reveal Animation
// ===============================

const contactElements = document.querySelectorAll(
    ".contact-info, .contact-form, .contact-box, footer"
);

function revealContact() {

    contactElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("load", revealContact);
window.addEventListener("scroll", revealContact);

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill in all fields.");
            return;

        }

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}