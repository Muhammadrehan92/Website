// ================================
// L O U R E L L E   S C R I P T
// ================================


// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


// Hero Animation
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {

            hero.style.transition = "1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";

        }, 300);

    }

});


// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
".card, .product-card, .box, .review"
);

function revealElementsOnScroll() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealElementsOnScroll);
window.addEventListener("load", revealElementsOnScroll);


// Product Button Animation

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerHTML = "✓ Added";

        setTimeout(() => {

            btn.innerHTML = "Add To Cart";

        }, 1500);

    });

});


// Navbar Active Link

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// Button Click Effect

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        },150);

    });

});


// Icon Hover Animation

document.querySelectorAll(".icons i").forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-5px)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0)";

    });

});


// Newsletter

const form = document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const email=this.querySelector("input").value;

if(email===""){

alert("Please enter your email.");

}else{

alert("Thank you for subscribing!");

this.reset();

}

});

}


// Smooth Scroll

document.documentElement.style.scrollBehavior="smooth";

console.log("Lourelle Script Loaded Successfully");
// ===============================
// Search Icon
// ===============================

const searchIcon = document.getElementById("searchIcon");

if (searchIcon) {
    searchIcon.addEventListener("click", () => {

        const search = prompt("Search your product:");

        if (search && search.trim() !== "") {
            alert("Searching for: " + search);
        }

    });
}

// ===============================
// Cart Counter
// ===============================

let cart = 0;

const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".product-card button").forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.innerText = cart;

    });

});

// ===============================
// Cart Icon
// ===============================

const cartIcon = document.getElementById("cartIcon");

if (cartIcon) {

    cartIcon.addEventListener("click", () => {

        if (cart === 0) {
            alert("Your cart is empty.");
        } else {
            alert("You have " + cart + " item(s) in your cart.");
        }

    });

}
// ===============================
// Footer Animation
// ===============================

const footer = document.querySelector("footer");

if (footer) {

    window.addEventListener("scroll", () => {

        const footerTop = footer.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (footerTop < screenHeight - 100) {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        }

    });

}

// ===============================
// Social Icons
// ===============================

const socialIcons = document.querySelectorAll(".social i");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "translateY(-8px) scale(1.1)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Social Click
// ===============================

socialIcons.forEach(icon => {

    icon.addEventListener("click", () => {

        if (icon.classList.contains("fa-facebook-f")) {
            alert("Facebook Page Coming Soon");
        }

        else if (icon.classList.contains("fa-instagram")) {
            alert("Instagram Page Coming Soon");
        }

        else if (icon.classList.contains("fa-twitter")) {
            alert("Twitter Page Coming Soon");
        }

        else if (icon.classList.contains("fa-youtube")) {
            alert("YouTube Channel Coming Soon");
        }

    });

});
const facebook = document.getElementById("facebook");

facebook.addEventListener("click", () => {
    location.href = "https://facebook.com";
});


const instagram = document.getElementById("instagram")

instagram.addEventListener("click", () => {
    location.href = "https://instagram.com";
});

const twitter = document.getElementById("twitter")

document.getElementById("twitter").addEventListener("click", () => {
   location.href = "https://x.com";
});

const youtube = document.getElementById("youtube")
document.getElementById("youtube").addEventListener("click", () => {
    location.href = "https://youtube.com";
});    
// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}