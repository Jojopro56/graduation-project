// --- ELECTRONIC AUDIO FX LOGIC (Web Audio API Synthesizer) ---
let audioCtx = null;

function playSoundFX(type) {
    try {
        if (!audioCtx) { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        if (audioCtx.state === 'suspended') { audioCtx.resume(); }
        if (type === 'hover') {
            const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
            osc.type = 'sine'; osc.frequency.setValueAtTime(880, audioCtx.currentTime); 
            gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
            osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.03);
        } else if (type === 'click') {
            const osc = audioCtx.createOscillator(); const gainNode = audioCtx.createGain();
            osc.type = 'sine'; osc.frequency.setValueAtTime(1200, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.02);
            gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
            osc.connect(gainNode); gainNode.connect(audioCtx.destination); osc.start(); osc.stop(audioCtx.currentTime + 0.12);
        }
    } catch (e) { console.warn(e); }
}

// --- DOM NAVIGATION INTERFACES ---
const pressStartScreen = document.getElementById('press-start-screen');
const startBgVideo = document.getElementById('start-bg-video');
const bgMusic = document.getElementById('menu-bg-music');
const mainMenuContainer = document.getElementById('main-menu-container');
const modeSelectionContainer = document.getElementById('mode-selection-container');
const chapterMenuContainer = document.getElementById('chapter-menu-container');

const btnStory = document.getElementById('btn-story');
const btnBackToMain = document.getElementById('btn-back-to-main');
const btnModeContinuous = document.getElementById('btn-mode-continuous');
const btnModeChapters = document.getElementById('btn-mode-chapters');
const btnBackToModes = document.getElementById('btn-back-to-modes');
const chapterCards = document.querySelectorAll('.chapter-card');

const btnCredits = document.getElementById('btn-credits');
const creditsOverlay = document.getElementById('credits-overlay');
const creditsClose = document.getElementById('credits-close');

const tutorialOverlay = document.getElementById('tutorial-overlay');
const tutImage = document.getElementById('tutorial-image');
const tutPrev = document.getElementById('tut-prev');
const tutNext = document.getElementById('tut-next');
const tutStart = document.getElementById('tut-start');
const tutReturn = document.getElementById('tut-return');
const tutDots = document.querySelectorAll('.dot');
const loadingOverlay = document.getElementById('loading-overlay');

const tutTimerContainer = document.getElementById('tut-timer-container');
const tutTimerCircle = document.querySelector('#tut-timer-container .progress-ring__circle');
let tutTimerInterval = null;
const MANDATORY_READ_TIME = 5000;

let isStartScreenDismissed = false;

function renderChapterStatuses() {
    const statusData = JSON.parse(localStorage.getItem('chapterStatuses')) || {};
    Object.keys(statusData).forEach(nodeId => {
        const badge = document.querySelector(`.card-status-badge[data-status-for="${nodeId}"]`);
        if (badge) { badge.className = `card-status-badge ${statusData[nodeId]}`; }
    });
}

function attachAudioTriggers() {
    const elements = document.querySelectorAll('.menu-block, .chapter-card, .mode-card, button');
    elements.forEach(elem => {
        elem.removeEventListener('mouseenter', () => playSoundFX('hover'));
        elem.addEventListener('mouseenter', () => playSoundFX('hover'));
    });
}

// --- 1. START EXPERIENCE CONFIRMATION ---
function dismissStartScreen() {
    if (isStartScreenDismissed) return;
    isStartScreenDismissed = true;
    playSoundFX('click');
    const overlay = document.querySelector('.start-overlay');
    if (overlay) overlay.classList.add('darkened');

    if (bgMusic) {
        bgMusic.volume = 0;
        bgMusic.play().then(() => {
            let fade = setInterval(() => {
                if (bgMusic.volume < 0.25) bgMusic.volume = Math.min(0.25, bgMusic.volume + 0.01);
                else clearInterval(fade);
            }, 40);
        }).catch(e => console.warn(e));
    }

    pressStartScreen.style.opacity = '0'; pressStartScreen.style.pointerEvents = 'none';
    setTimeout(() => {
        pressStartScreen.style.display = 'none';
        mainMenuContainer.classList.add('active-panel');
    }, 800); 
}

pressStartScreen.addEventListener('click', dismissStartScreen);
document.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !isStartScreenDismissed) dismissStartScreen(); });

// --- 2. GLIDE PARALLAX VIEWS ---
btnStory.addEventListener('click', () => { playSoundFX('click'); mainMenuContainer.classList.remove('active-panel'); mainMenuContainer.classList.add('slide-out-left'); modeSelectionContainer.classList.remove('hidden-panel-right'); modeSelectionContainer.classList.add('active-panel'); });
btnBackToMain.addEventListener('click', () => { playSoundFX('click'); modeSelectionContainer.classList.remove('active-panel'); modeSelectionContainer.classList.add('hidden-panel-right'); mainMenuContainer.classList.remove('slide-out-left'); mainMenuContainer.classList.add('active-panel'); });
btnModeChapters.addEventListener('click', () => { playSoundFX('click'); modeSelectionContainer.classList.remove('active-panel'); modeSelectionContainer.classList.add('slide-out-left'); chapterMenuContainer.classList.remove('hidden-panel-right'); chapterMenuContainer.classList.add('active-panel'); });
btnBackToModes.addEventListener('click', () => { playSoundFX('click'); chapterMenuContainer.classList.remove('active-panel'); chapterMenuContainer.classList.add('hidden-panel-right'); modeSelectionContainer.classList.remove('slide-out-left'); modeSelectionContainer.classList.add('active-panel'); });

const btnGuide = document.getElementById('btn-guide');
if (btnGuide) {
    btnGuide.addEventListener('click', () => {
        playSoundFX('click');
        window.location.href = "bearcatguide.html";
    });
}

function executeLaunchSequence() { loadingOverlay.style.display = 'flex'; setTimeout(() => { window.location.href = "index.html"; }, 1800); }

// --- 3. PLAYBACK INTENT HANDLERS ---
// Full continuous tracking launch with integrated tutorial loop entry
btnModeContinuous.addEventListener('click', () => {
    playSoundFX('click');
    localStorage.setItem('gameMode', 'continuous');
    localStorage.removeItem('storySaveData');
    
    // FIXED: Routes the user to the tutorial screen before full continuous story starts
    currentTutIndex = 0;
    updateTutorialUI();
    tutorialOverlay.classList.add('active');
});

chapterCards.forEach(card => {
    card.addEventListener('click', () => {
        playSoundFX('click');
        const node = card.getAttribute('data-chapter');
        const base = parseInt(card.getAttribute('data-baseline'), 10);
        
        localStorage.setItem('gameMode', 'chapter');
        const soloSave = { score: base, node: node, index: 1, subtitles: false };
        localStorage.setItem('storySaveData', JSON.stringify(soloSave));
        
        if (node === 'intro') {
            currentTutIndex = 0; updateTutorialUI(); tutorialOverlay.classList.add('active');
        } else { executeLaunchSequence(); }
    });
});

// --- 4. CAROUSEL TUTORIALS ---
const tutorialImages = ["images/Tutorial-Grad-Project/placeholders/1.png", "images/Tutorial-Grad-Project/placeholders/2.png", "images/Tutorial-Grad-Project/placeholders/3.png"];
let currentTutIndex = 0;
function updateTutorialUI() {
    tutImage.src = tutorialImages[currentTutIndex];
    tutDots.forEach((dot, index) => dot.classList.toggle('active', index === currentTutIndex));
    tutPrev.disabled = currentTutIndex === 0; tutNext.style.display = 'none'; tutStart.style.display = 'none'; tutTimerContainer.style.display = 'flex';
    if (tutTimerInterval) clearInterval(tutTimerInterval);
    const radius = tutTimerCircle.r.baseVal.value; const circumference = radius * 2 * Math.PI;
    tutTimerCircle.style.strokeDasharray = `${circumference} ${circumference}`; tutTimerCircle.style.strokeDashoffset = 0;
    const start = Date.now();
    tutTimerInterval = setInterval(() => {
        const elapsed = Date.now() - start; const percentage = Math.max(0, 1 - (elapsed / MANDATORY_READ_TIME));
        tutTimerCircle.style.strokeDashoffset = circumference - (percentage * circumference);
        if (elapsed >= MANDATORY_READ_TIME) {
            clearInterval(tutTimerInterval); tutTimerContainer.style.display = 'none';
            if (currentTutIndex === tutorialImages.length - 1) tutStart.style.display = 'block'; else tutNext.style.display = 'block';
        }
    }, 50);
}
tutNext.addEventListener('click', () => { playSoundFX('click'); currentTutIndex++; updateTutorialUI(); });
tutPrev.addEventListener('click', () => { playSoundFX('click'); currentTutIndex--; updateTutorialUI(); });
tutReturn.addEventListener('click', () => { playSoundFX('click'); tutorialOverlay.classList.remove('active'); if (tutTimerInterval) clearInterval(tutTimerInterval); });
tutStart.addEventListener('click', () => { playSoundFX('click'); tutorialOverlay.classList.remove('active'); executeLaunchSequence(); });

// --- 5. CREDITS HANDLERS ---
btnCredits.addEventListener('click', () => { playSoundFX('click'); creditsOverlay.classList.add('active'); });
creditsClose.addEventListener('click', () => { playSoundFX('click'); creditsOverlay.classList.remove('active'); });

// Initialize Menu Environment
renderChapterStatuses();
attachAudioTriggers();
setTimeout(attachAudioTriggers, 500);

// Add this helper function inside menu-app.js:
function renderPersonalBest() {
    const pbScore = parseInt(localStorage.getItem('personalBestScore') || '0', 10);
    const pbScoreElem = document.getElementById('mode-pb-score');
    if (pbScoreElem) {
        pbScoreElem.innerText = `${pbScore} / 1000`;
    }
}

// Ensure it is called when the menu initializes at the bottom of menu-app.js:
renderChapterStatuses();
renderPersonalBest();
attachAudioTriggers();
setTimeout(attachAudioTriggers, 500);