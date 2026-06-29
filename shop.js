// ===========================
// LOURELLE SHOP JS (Part 3.1)
// ===========================

/*document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // SEARCH
    // ===========================

    const searchInput = document.querySelector(".search-box input");
    const products = document.querySelectorAll(".product-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const value = searchInput.value.toLowerCase();

            products.forEach(product => {

                const title = product.querySelector("h3").textContent.toLowerCase();

                if (title.includes(value)) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });

        });

    }

    // ===========================
    // HEART BUTTON
    // ===========================

    const hearts = document.querySelectorAll(".product-icons i");

    hearts.forEach(heart => {

        heart.addEventListener("click", () => {

            heart.classList.toggle("fa-regular");
            heart.classList.toggle("fa-solid");

            if (heart.classList.contains("fa-solid")) {

                heart.style.color = "red";

            } else {

                heart.style.color = "";

            }

        });

    });

    // ===========================
    // SHOP NOW BUTTON
    // ===========================

    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            btn.innerHTML = "✓ Added";

            btn.style.background = "#28a745";

            setTimeout(() => {

                btn.innerHTML = "Shop Now";

                btn.style.background = "";

            }, 1500);

        });

    });

    // ===========================
    // HEADER SCROLL EFFECT
    // ===========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

});
// ===========================
// CATEGORY FILTER
// ===========================

const categoryFilter = document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener("change",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(value==="all categories"){

card.style.display="block";

}

else if(title===value || title===value.slice(0,-1)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

// ===========================
// SORT PRODUCTS
// ===========================

const sort=document.getElementById("sortProducts");

if(sort){

sort.addEventListener("change",()=>{

const grid=document.querySelector(".product-grid");

const cards=[...document.querySelectorAll(".product-card")];

cards.sort((a,b)=>{

const priceA=parseFloat(a.querySelector("p").innerText.replace("$",""));

const priceB=parseFloat(b.querySelector("p").innerText.replace("$",""));

if(sort.value==="Low Price"){

return priceA-priceB;

}

if(sort.value==="High Price"){

return priceB-priceA;

}

return 0;

});

cards.forEach(card=>grid.appendChild(card));

});

}

// ===========================
// PRODUCT ANIMATION
// ===========================

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";
card.style.transition=".4s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ===========================
// FADE IN
// ===========================

window.addEventListener("load",()=>{

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*150);

});

});*/
document.addEventListener("DOMContentLoaded", () => {

const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".product-card");

// SEARCH
searchInput.addEventListener("input", () => {
const value = searchInput.value.toLowerCase();

cards.forEach(card => {
const title = card.querySelector("h3").innerText.toLowerCase();

card.style.display = title.includes(value) ? "block" : "none";
});
});

// LIKE BUTTON
document.querySelectorAll(".product-icons i").forEach(heart => {
heart.addEventListener("click", () => {
heart.classList.toggle("fa-solid");
heart.classList.toggle("fa-regular");
heart.style.color = heart.classList.contains("fa-solid") ? "red" : "";
});
});

// BUTTON ANIMATION
document.querySelectorAll(".product-card button").forEach(btn => {
btn.addEventListener("click", () => {
btn.innerText = "Added ✓";
btn.style.background = "green";

setTimeout(() => {
btn.innerText = "Shop Now";
btn.style.background = "";
}, 1500);
});
});

// SORT
const sort = document.getElementById("sortProducts");

sort.addEventListener("change", () => {
const grid = document.querySelector(".product-grid");
let arr = [...cards];

arr.sort((a,b)=>{
let pa = parseFloat(a.querySelector("p").innerText.replace("$",""));
let pb = parseFloat(b.querySelector("p").innerText.replace("$",""));

if(sort.value==="Low Price") return pa-pb;
if(sort.value==="High Price") return pb-pa;
return 0;
});

arr.forEach(card=>grid.appendChild(card));
});

});