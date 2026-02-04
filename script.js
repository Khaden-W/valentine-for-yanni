console.log("Script loaded!");

const startBtn = document.getElementById("startBtn");
const questionSection = document.getElementById("questionSection");
const yesBtn = document.getElementById("yesBtn");
const yesMessage = document.getElementById("yesMessage");
const celebration = document.getElementById("celebration");
const music = document.getElementById("bgMusic");

// Set gentle volume if music exists
if (music) {
    music.volume = 0.6;
}

startBtn.addEventListener("click", () => {
    console.log("Start clicked");
    startBtn.classList.add("hidden");
    questionSection.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
    console.log("Yes clicked");

    if (music) {
    music.currentTime = 0;
    music.play().then(() => {
        console.log("Music started");
    }).catch(err => {
        console.log("Playback prevented:", err);
    });
}


    questionSection.classList.add("hidden");
    yesMessage.classList.remove("hidden");
    celebration.classList.add("show");
    setTimeout(() => {
    celebration.classList.add("fade-out");
}, 3000); // fades away after 3 seconds

    document.body.classList.add("love-mode");

    // Try to play music safely
    if (music) {
        music.play().catch(err => {
            console.log("Autoplay blocked, but interaction registered.");
        });
    }

    for (let i = 0; i < 60; i++) {
        createHeart();
    }
    startSlideshow();
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

const slideshowImages = [
    "images/skywheel-us.jpeg",
    "images/muesem-us.jpeg",
    "images/christmas-us.jpeg",
    "images/chill-us.jpeg",
    "images/dinner-us.jpeg",
    "images/haloween-us.jpeg",
    "images/herfav-us.jpeg",
    "images/fair-us.jpeg"
];

let slideIndex = 0;
let slideshowInterval = null;

function startSlideshow() {
    const slideshow = document.getElementById("slideshow");

    // Safety check
    if (!slideshow) {
        console.log("Slideshow image not found");
        return;
    }

    // Prevent starting multiple intervals
    if (slideshowInterval) return;

    slideshowInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slideshowImages.length;

        slideshow.style.opacity = 0;

        setTimeout(() => {
            slideshow.src = slideshowImages[slideIndex];
            slideshow.style.opacity = 1;
        }, 500);

    }, 3000);
}
