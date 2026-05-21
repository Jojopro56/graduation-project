// --- DOM ELEMENTS ---
const pressStartScreen = document.getElementById('press-start-screen');
const mainMenuContainer = document.getElementById('main-menu-container');
const btnCredits = document.getElementById('btn-credits');
const creditsOverlay = document.getElementById('credits-overlay');
const creditsClose = document.getElementById('credits-close');

const btnStory = document.getElementById('btn-story');
// Note: btn-guide and btn-credits don't need JS logic yet unless you build those pages later!

const tutorialOverlay = document.getElementById('tutorial-overlay');
const tutImage = document.getElementById('tutorial-image');
const tutPrev = document.getElementById('tut-prev');
const tutNext = document.getElementById('tut-next');
const tutStart = document.getElementById('tut-start');
const tutDots = document.querySelectorAll('.dot');

const loadingOverlay = document.getElementById('loading-overlay');

// --- 1. PRESS START LOGIC ---
// Dismiss the start screen if they click OR press Enter
function dismissStartScreen() {
    pressStartScreen.style.opacity = '0';
    setTimeout(() => {
        pressStartScreen.style.display = 'none';
        mainMenuContainer.style.opacity = '1';
    }, 500); // Wait for the fade out transition
}

pressStartScreen.addEventListener('click', dismissStartScreen);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && pressStartScreen.style.display !== 'none') {
        dismissStartScreen();
    }
});

// --- 2. TUTORIAL LOGIC ---
// Update these paths to the images you want to use for the tutorial panels
const tutorialImages = [
    "images/Tutorial-Grad-Project/placeholders/1.png",
    "images/Tutorial-Grad-Project/placeholders/2.png",
    "images/Tutorial-Grad-Project/placeholders/3.png"
];
let currentTutIndex = 0;

function updateTutorialUI() {
    // 1. Swap the image
    tutImage.src = tutorialImages[currentTutIndex];

    // 2. Update the dots
    tutDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTutIndex);
    });

    // 3. Handle Prev button (disabled on first slide)
    tutPrev.disabled = currentTutIndex === 0;

    // 4. Handle Next vs Start Experience buttons
    if (currentTutIndex === tutorialImages.length - 1) {
        // Last slide: hide Next, show Start
        tutNext.style.display = 'none';
        tutStart.style.display = 'block';
    } else {
        // Not last slide: show Next, hide Start
        tutNext.style.display = 'block';
        tutStart.style.display = 'none';
    }
}

// Open Tutorial
btnStory.addEventListener('click', () => {
    currentTutIndex = 0;
    updateTutorialUI();
    tutorialOverlay.style.display = 'flex';
});

// Carousel Controls
tutNext.addEventListener('click', () => {
    if (currentTutIndex < tutorialImages.length - 1) {
        currentTutIndex++;
        updateTutorialUI();
    }
});

tutPrev.addEventListener('click', () => {
    if (currentTutIndex > 0) {
        currentTutIndex--;
        updateTutorialUI();
    }
});

// --- 3. FINAL START EXPEREINCE LOGIC ---
tutStart.addEventListener('click', () => {
    // Hide tutorial, show loading screen
    tutorialOverlay.style.display = 'none';
    loadingOverlay.style.display = 'flex';

    // Wait exactly 5 seconds, then jump to your story player!
    // IMPORTANT: Make sure "index.html" matches the exact file name of your video player code.
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 5000);
});

// --- 4. CREDITS LOGIC ---
btnCredits.addEventListener('click', () => {
    creditsOverlay.style.display = 'flex';
});

creditsClose.addEventListener('click', () => {
    creditsOverlay.style.display = 'none';
});

// Bonus: Let the user close the credits by pressing the Escape key!
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && creditsOverlay.style.display === 'flex') {
        creditsOverlay.style.display = 'none';
    }
});