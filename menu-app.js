// --- DOM ELEMENTS ---
const pressStartScreen = document.getElementById('press-start-screen');
const startBgVideo = document.getElementById('start-bg-video'); // NEW
const mainMenuContainer = document.getElementById('main-menu-container');
const btnCredits = document.getElementById('btn-credits');
const creditsOverlay = document.getElementById('credits-overlay');
const creditsClose = document.getElementById('credits-close');

const btnStory = document.getElementById('btn-story');

const tutorialOverlay = document.getElementById('tutorial-overlay');
const tutImage = document.getElementById('tutorial-image');
const tutPrev = document.getElementById('tut-prev');
const tutNext = document.getElementById('tut-next');
const tutStart = document.getElementById('tut-start');
const tutReturn = document.getElementById('tut-return'); // NEW
const tutDots = document.querySelectorAll('.dot');

const loadingOverlay = document.getElementById('loading-overlay');

// NEW: Tutorial Timer Variables
const tutTimerContainer = document.getElementById('tut-timer-container');
const tutTimerCircle = document.querySelector('#tut-timer-container .progress-ring__circle');
let tutTimerInterval = null;
const MANDATORY_READ_TIME = 5000; // 5 seconds in milliseconds

// --- 1. PRESS START LOGIC ---
function dismissStartScreen() {
    pressStartScreen.style.opacity = '0';
    setTimeout(() => {
        pressStartScreen.style.display = 'none';
        mainMenuContainer.style.opacity = '1';
        // Pause the background video to save resources once the menu is active
        if (startBgVideo) startBgVideo.pause(); 
    }, 800); 
}

pressStartScreen.addEventListener('click', dismissStartScreen);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && pressStartScreen.style.display !== 'none') {
        dismissStartScreen();
    }
});

// --- 2. TUTORIAL LOGIC ---
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

    // 4. --- TIMER LOGIC ---
    // Hide the 'Next' and 'Start' buttons immediately
    tutNext.style.display = 'none';
    tutStart.style.display = 'none';
    tutTimerContainer.style.display = 'flex'; // Show the circle
    
    // Clear any existing timer if they clicked back/next quickly
    if (tutTimerInterval) clearInterval(tutTimerInterval);
    
    // Prepare SVG math for the circle drain
    const radius = tutTimerCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    tutTimerCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    tutTimerCircle.style.strokeDashoffset = 0;
    
    const startTime = Date.now();
    
    // Start ticking!
    tutTimerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        
        // Drain circle visually
        const percentage = Math.max(0, 1 - (elapsed / MANDATORY_READ_TIME));
        const offset = circumference - (percentage * circumference);
        tutTimerCircle.style.strokeDashoffset = offset;
        
        // Time is up!
        if (elapsed >= MANDATORY_READ_TIME) {
            clearInterval(tutTimerInterval);
            tutTimerContainer.style.display = 'none'; // Hide circle
            
            // Reveal the correct button based on which slide we are on
            if (currentTutIndex === tutorialImages.length - 1) {
                tutStart.style.display = 'block'; // Last slide gets Start Experience
            } else {
                tutNext.style.display = 'block'; // Normal slide gets Next
            }
        }
    }, 50);
}

// Open Tutorial
btnStory.addEventListener('click', () => {
    currentTutIndex = 0;
    updateTutorialUI();
    tutorialOverlay.classList.add('active'); // NEW: Triggers the smooth fade-in
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

// NEW: Return to Main Menu Button
tutReturn.addEventListener('click', () => {
    tutorialOverlay.classList.remove('active'); // NEW: Triggers the smooth fade-out
    if (tutTimerInterval) clearInterval(tutTimerInterval); // Stop timer from ticking in background
});

// --- 3. FINAL START EXPEREINCE LOGIC ---
tutStart.addEventListener('click', () => {
    tutorialOverlay.classList.remove('active'); 
    loadingOverlay.style.display = 'flex';

    
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 2000); 
});

// --- 4. CREDITS LOGIC ---
btnCredits.addEventListener('click', () => {
    creditsOverlay.style.display = 'flex';
});

creditsClose.addEventListener('click', () => {
    creditsOverlay.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && creditsOverlay.style.display === 'flex') {
        creditsOverlay.style.display = 'none';
    }
});