//============================
// Sticky Header Shadow
//============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
        header.style.background = "#fff";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "#fff";
    }

});


//============================
// Active Navbar Link
//============================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


//============================
// Scroll To Top Button
//============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#C9A227;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:1000;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


//============================
// Reveal Animation
//============================

const revealElements = document.querySelectorAll(
".card,.product-card,.box,.review"
);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(60px)";
    item.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();


//============================
// Newsletter Validation
//============================

const form = document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const email = this.querySelector("input");

if(email.value===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

email.value="";

});

}


//============================
// Hero Button Scroll
//============================

const heroBtn = document.querySelector(".hero button");

const category = document.querySelector(".categories");

if(heroBtn){

heroBtn.addEventListener("click",()=>{

category.scrollIntoView({

behavior:"smooth"

});

});
}
// =========================
// ACTIVE LINK AUTO HIGHLIGHT
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        // remove active from all
        navLinks.forEach(l => l.classList.remove("active"));

        // add active to clicked one
        this.classList.add("active");
    });
});