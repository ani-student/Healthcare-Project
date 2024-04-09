//  cursor ===
const crsr = document.getElementById("cursor")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})

// about-us==
const imgContainer = document.querySelector(".img-container");
const Img = document.querySelectorAll("img")
const prevE1 = document.querySelector(".prev")
const nextE1 = document.querySelector(".next")

let currentImg = 1;
scrollImg();
function scrollImg() {
    if (currentImg > Img.length) {
        currentImg = 1;
    }
    else if (currentImg < 1) {
        currentImg = Img.length;
    }
    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    setTimeout(() => {
        currentImg++;
        scrollImg();
    }, 1000);
}


// home section=====

const homeLinks = document.querySelectorAll(".home-link")
let contentLinks = document.querySelectorAll(".content-link")
function opentab(anyname) {

    for (homeLink of homeLinks) {
        homeLink.classList.remove("active")

    }

    for (contentLink of contentLinks) {
        contentLink.classList.remove("active-tab")

    }

    event.currentTarget.classList.add("active")
    document.getElementById(anyname).classList
        .add("active-tab")
}


gsap.to("#nav", {
    backgroundColor: "#656e83",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#section1 .left", {
    x: 90,
    duration: 1,
    scrollTrigger: {
        trigger: "about",
        scroller: "body",
        scrub: 2
    }
})
gsap.from("#section1 .right", {
    x: 80,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "about",
        scroller: "body",
        // scrub:1
    }
})

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65",
        scrub: 1,
    }
})

// about counter  ====
const counterNumbers = document.querySelectorAll(".counter_number")
let interval = 7000;
counterNumbers.forEach((counterNumber) => {
    let startValue = 0;
    let endValue = parseInt(counterNumber.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        counterNumber.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }

    }, duration);
});