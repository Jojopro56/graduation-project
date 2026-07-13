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

// --- 1. THE STORY MANIFEST ---
const storyManifest = {
    // --- CHAPTER 1 ---
    "intro": { 
        chapterIndex: 1, 
        folder: "videos/1/", 
        question: "Where should Mikey throw the detergent bin?", 
        choices: [
            { text: "Another Bin", valueChange: 160, nextNode: "1g" }, 
            { text: "Trash Can", valueChange: -320, nextNode: "1b" }
        ] 
    },
    "1g": { folder: "videos/1/1g/", autoNext: "chap2", outcomeTitle: "Good Job!", outcomeText: "You looked for another bin. Detergent bottles are recyclable and should never go in the landfill." },
    "1b": { folder: "videos/1/1b/", autoNext: "chap2", outcomeTitle: "Wrong Answer!", outcomeText: "Detergent bottles are highly recyclable plastic. Throwing them in the trash fills up landfills unnecessarily." },

    // --- CHAPTER 2 ---
    "chap2": { 
        chapterIndex: 2, 
        folder: "videos/2/", 
        question: "Where should Mikey throw the cup?", 
        choices: [
            { text: "Plastic Bin", valueChange: -320, nextNode: "2b" }, 
            { text: "Landfill Bin", valueChange: 160, nextNode: "2g" }
        ] 
    },
    "2g": { folder: "videos/2/2g/", autoNext: "chap3", outcomeTitle: "Good Job!", outcomeText: "You successfully managed to throw the cup away." },
    "2b": { folder: "videos/2/2b/", autoNext: "chap3", outcomeTitle: "Wrong Answer!", outcomeText: "Empty your cup at all times, and throw it in the landfill as it's not recyclable!" },

    // --- CHAPTER 3 ---
    "chap3": { 
        chapterIndex: 3, 
        folder: "videos/3/", 
        question: "Where should Mikey throw the test away?", 
        choices: [
            { text: "Trash Can", valueChange: -320, nextNode: "3b" }, 
            { text: "Hold Onto the Test", valueChange: 160, nextNode: "3g" }
        ] 
    },
    "3g": { folder: "videos/3/3g/", autoNext: "chap4", outcomeTitle: "Good Job!", outcomeText: "The paper test can now successfully be recycled." },
    "3b": { folder: "videos/3/3b/", autoNext: "chap4", outcomeTitle: "Wrong Answer!", outcomeText: "A waste of paper! It's better to throw the test in a paper bin instead of a standard trash can so the paper can be recycled." },

    // --- CHAPTER 4 ---
    "chap4": { 
        chapterIndex: 4, 
        folder: "videos/4/", 
        question: "What should Mikey do with the pizza box?", 
        choices: [
            { text: "Tear Pizza Box In Half and Toss", valueChange: 160, nextNode: "4g" }, 
            { text: "Toss Entire Box in Paper Bin", valueChange: -320, nextNode: "4b" }
        ] 
    },
    "4g": { folder: "videos/4/4g/", autoNext: "chap5", outcomeTitle: "Good Job!", outcomeText: "Greasy pizza boxes still contain clean cardboard. Great job on separating it!" },
    "4b": { folder: "videos/4/4b/", autoNext: "chap5", outcomeTitle: "Wrong Answer!", outcomeText: "The pizza box was greasy, and contaminates the clean paper that's already in the bin." },

    // --- CHAPTER 5 ---
    "chap5": { 
        chapterIndex: 5, 
        folder: "videos/5/", 
        question: "Where should Mikey Throw the Empty Bottle?", 
        choices: [
            { text: "Landfill Bin", valueChange: -320, nextNode: "5b" }, 
            { text: "Plastic Bin", valueChange: 160, nextNode: "5g" }
        ] 
    },
    "5g": { folder: "videos/5/5g/", autoNext: "chap6", outcomeTitle: "Good Job!", outcomeText: "Plastic bottles and jugs go into the plastic bin, nothing else." },
    "5b": { folder: "videos/5/5b/", autoNext: "chap6", outcomeTitle: "Wrong Answer!", outcomeText: "Plastic bottles and jugs go into the plastic bin, it's a waste to throw it into the landfill bin!" },

    // --- CHAPTER 6 (THE GAUNTLET) ---
    "chap6": { chapterIndex: 6, folder: "videos/6/", question: "Where should Mikey throw his FRY BOX away?", timeLimit: 10, timeoutNode: "6b_time", choices: [{ text: "Paper Bin", valueChange: -100, nextNode: "6b_1" }, { text: "Metal Cans Bin", valueChange: -100, nextNode: "6b_1" }, { text: "Plastic Bin", valueChange: -100, nextNode: "6b_1" }, { text: "Landfill Bin", valueChange: 50, nextNode: "6c2" }] },
    "6c2": { folder: "videos/6/6c2/", question: "Where should Mikey throw his CLEAN PAPER BAG away?", timeLimit: 10, timeoutNode: "6b_time", choices: [{ text: "Paper Bin", valueChange: 50, nextNode: "6c3" }, { text: "Metal Cans Bin", valueChange: -100, nextNode: "6b_2" }, { text: "Plastic Bin", valueChange: -100, nextNode: "6b_2" }, { text: "Landfill Bin", valueChange: -100, nextNode: "6b_2" }] },
    "6c3": { folder: "videos/6/6c3/", question: "Where should Mikey throw his SODA CAN away?", timeLimit: 10, timeoutNode: "6b_time", choices: [{ text: "Paper Bin", valueChange: -100, nextNode: "6b_3" }, { text: "Metal Cans Bin", valueChange: 50, nextNode: "6c4" }, { text: "Plastic Bin", valueChange: -100, nextNode: "6b_3" }, { text: "Landfill Bin", valueChange: -100, nextNode: "6b_3" }] },
    "6c4": { folder: "videos/6/6c4/", question: "Where should Mikey throw his PLASTIC BOTTLE away?", timeLimit: 10, timeoutNode: "6b_time", choices: [{ text: "Paper Bin", valueChange: -100, nextNode: "6b_4" }, { text: "Metal Cans Bin", valueChange: -100, nextNode: "6b_4" }, { text: "Plastic Bin", valueChange: 50, nextNode: "6g" }, { text: "Landfill Bin", valueChange: -100, nextNode: "6b_4" }] },

    // --- CHAPTER 6 ENDINGS ---
    "6g": { folder: "videos/6/6g/", autoNext: "chap7", outcomeTitle: "Good Job!", outcomeText: "You successfully sorted all the items into their proper bins!" },
    "6b_time": { folder: "videos/6/6b/", autoNext: "chap7", outcomeTitle: "Time's Up!", outcomeText: "Your time ran out and Mikey got nervous, be quicker next time!" },
    "6b_1": { folder: "videos/6/6b/", autoNext: "chap7", outcomeTitle: "Wrong Answer!", outcomeText: "A Fry Box gets greasy because of the fries. Goes into landfill as it contaminates clean paper!" },
    "6b_2": { folder: "videos/6/6b/", autoNext: "chap7", outcomeTitle: "Wrong Answer!", outcomeText: "The paper bag is clean enough to go into the paper recycling bin!" },
    "6b_3": { folder: "videos/6/6b/", autoNext: "chap7", outcomeTitle: "Wrong Answer!", outcomeText: "Empty metal cans go in the metal cans bin!" },
    "6b_4": { folder: "videos/6/6b/", autoNext: "chap7", outcomeTitle: "Wrong Answer!", outcomeText: "Empty plastic bottles go in the plastic bin!" },

    // --- CHAPTER 7 (THE SCORE & REPORT-CARD ROUTER) ---
    "chap7": {
        isRouter: true,
        routeBasedOnScore: function (score) {
            if (localStorage.getItem('gameMode') === 'chapter') {
                const statuses = JSON.parse(localStorage.getItem('chapterStatuses')) || {};
                const nodes = ["intro", "chap2", "chap3", "chap4", "chap5", "chap6"];
                let rightCount = 0;
                let wrongCount = 0;

                nodes.forEach(n => {
                    if (statuses[n] === 'completed') rightCount++;
                    if (statuses[n] === 'failed') wrongCount++;
                });

                if (rightCount === 6) {
                    return "7p"; 
                } else if (rightCount > wrongCount) {
                    return "7g"; 
                } else {
                    return "7b"; 
                }
            } else {
                if (score >= 990) return "7p";
                else if (score >= 650) return "7g";
                else return "7b";
            }
        }
    },

    // FIXED: Restored missing ending nodes back to the manifest map layer
    "7p": { folder: "videos/7/7p/" }, 
    "7g": { folder: "videos/7/7g/" }, 
    "7b": { folder: "videos/7/7b/" }
};

// --- 2. PLAYER VARIABLE SELECTORS ---
const video = document.getElementById('story-video');
const startBtn = document.getElementById('start-btn');
const choicesOverlay = document.getElementById('choices-overlay');
const progressContainer = document.getElementById('progress-container');
const chapterStatusContainer = document.getElementById('chapter-status-container');
const progressBar = document.getElementById('progress-bar');
const subtitleBtn = document.getElementById('subtitle-btn');
const resumeOverlay = document.getElementById('resume-overlay');
const resumeYes = document.getElementById('resume-yes');
const resumeNo = document.getElementById('resume-no');
const hamburgerBtn = document.getElementById('hamburger-btn');
const pauseMenuOverlay = document.getElementById('pause-menu-overlay');
const menuMainPanel = document.getElementById('menu-main-panel');
const menuConfirmPanel = document.getElementById('menu-confirm-panel');
const menuContinue = document.getElementById('menu-continue');
const menuRestart = document.getElementById('menu-restart');
const menuMainMenu = document.getElementById('menu-mainmenu');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
const confirmText = document.getElementById('confirm-text');
const endOverlay = document.getElementById('end-overlay');
const endMainMenuBtn = document.getElementById('end-mainmenu');
const devMenuOverlay = document.getElementById('dev-menu-overlay');
const devCloseBtn = document.getElementById('dev-close-btn');
const devBtns = document.querySelectorAll('.dev-btn');
const devAuthContainer = document.getElementById('dev-auth-container');
const devContent = document.getElementById('dev-content');
const devPasscodeInput = document.getElementById('dev-passcode-input');
const devAuthError = document.getElementById('dev-auth-error');
const devAuthCloseBtn = document.getElementById('dev-auth-close-btn');
const outcomeOverlay = document.getElementById('outcome-overlay');
const outcomeTitle = document.getElementById('outcome-title');
const outcomeText = document.getElementById('outcome-text');
const outcomeNextBtn = document.getElementById('outcome-next-btn');
const timerContainer = document.getElementById('timer-container');
const timerText = document.getElementById('timer-text');
const timerCircle = document.querySelector('.progress-ring__circle');
const timerSound = document.getElementById('timer-sound');

let currentScore = 0; let currentNodeId = null; let currentSequenceIndex = 1;
let subtitlesEnabled = false; let isDevAuthenticated = false; let targetNodeAfterOutcome = null;
let countdownTimerInterval = null; let progressBarSimulationInterval = null;
let tooltipsTriggered = false; 
const MAX_SCORE = 1000;
const gameMode = localStorage.getItem('gameMode') || 'continuous';

// --- HUD ARCHITECTURE DRIVERS ---
function syncHUDModeDisplay() {
    hamburgerBtn.classList.add('visible');
    subtitleBtn.classList.add('visible');
    
    if (gameMode === 'chapter') {
        progressContainer.style.setProperty('display', 'none', 'important');
        chapterStatusContainer.classList.add('visible');
        renderGameplayDots();
    } else {
        chapterStatusContainer.classList.remove('visible');
        progressContainer.style.setProperty('display', 'flex', 'important'); 
        updateProgressBar();
    }
}

function triggerGameplayTooltips() {
    if (!tooltipsTriggered) {
        tooltipsTriggered = true;
        const menuTt = document.querySelector('.menu-tooltip');
        const ccTt = document.querySelector('.cc-tooltip');
        const progTt = document.querySelector('.progress-tooltip');
        
        if (menuTt) menuTt.classList.add('visible');
        if (ccTt) ccTt.classList.add('visible');
        if (progTt && gameMode !== 'chapter') {
            progTt.classList.add('visible');
        }
        
        setTimeout(() => {
            if (menuTt) menuTt.classList.remove('visible');
            if (ccTt) ccTt.classList.remove('visible');
            if (progTt) progTt.classList.remove('visible');
        }, 12000); 
    }
}

function renderGameplayDots() {
    const statuses = JSON.parse(localStorage.getItem('chapterStatuses')) || {};
    const nodes = ["intro", "chap2", "chap3", "chap4", "chap5", "chap6"];
    nodes.forEach(nodeId => {
        const dot = document.getElementById(`node-dot-${nodeId}`);
        if (dot) {
            dot.className = "status-node-dot";
            if (statuses[nodeId]) dot.classList.add(statuses[nodeId]);
            if (currentNodeId === nodeId || (storyManifest[currentNodeId] && storyManifest[currentNodeId].chapterIndex === nodes.indexOf(nodeId) + 1)) {
                dot.classList.add('active-now');
            }
        }
    });
}

function updateChapterStatus(status) {
    const nodes = ["intro", "chap2", "chap3", "chap4", "chap5", "chap6"];
    let currentChapterNode = currentNodeId;
    
    if (storyManifest[currentNodeId] && !storyManifest[currentNodeId].chapterIndex) {
        Object.keys(storyManifest).forEach(key => {
            if (storyManifest[key].chapterIndex && currentNodeId.startsWith(key.replace('chap',''))) {
                currentChapterNode = key;
            }
        });
        if (currentNodeId.startsWith('1')) currentChapterNode = 'intro';
    }
    
    if (nodes.includes(currentChapterNode)) {
        if (gameMode === 'chapter') {
            const statuses = JSON.parse(localStorage.getItem('chapterStatuses')) || {};
            statuses[currentChapterNode] = status;
            localStorage.setItem('chapterStatuses', JSON.stringify(statuses));
            renderGameplayDots();
        } else {
            if (!window.continuousPerformanceLog) window.continuousPerformanceLog = {};
            window.continuousPerformanceLog[currentChapterNode] = status;
        }
    }
}

function startProgressBarSimulation() {
    if (gameMode === 'chapter') return;
    let growing = true; let simulatedScore = 0;
    if (progressBarSimulationInterval) clearInterval(progressBarSimulationInterval);
    progressBarSimulationInterval = setInterval(() => {
        if (growing) { simulatedScore += 8; if (simulatedScore >= MAX_SCORE) { simulatedScore = MAX_SCORE; growing = false; } }
        else { simulatedScore -= 8; if (simulatedScore <= 0) { simulatedScore = 0; growing = true; } }
        progressBar.style.width = `${(simulatedScore / MAX_SCORE) * 100}%`;
        progressBar.style.backgroundColor = `rgb(0, ${Math.floor(50 + (205 * (simulatedScore / MAX_SCORE)))}, 0)`;
        const txt = document.getElementById('score-digital-counter'); if (txt) txt.innerText = `${Math.floor(simulatedScore)} / ${MAX_SCORE}`;
    }, 20);
}

function stopProgressBarSimulation() { if (progressBarSimulationInterval) { clearInterval(progressBarSimulationInterval); progressBarSimulationInterval = null; } }

function checkSaveData() {
    if (gameMode === 'chapter') {
        const data = JSON.parse(localStorage.getItem('storySaveData'));
        syncHUDModeDisplay();
        preloadAndPlay(data ? data.node : "intro");
        return;
    }
    const savedString = localStorage.getItem('storySaveData');
    if (savedString) {
        const data = JSON.parse(savedString);
        if (data.node === "intro" && data.score === 0 && data.index === 1) {
            syncHUDModeDisplay();
            preloadAndPlay("intro");
        } else {
            startBtn.classList.remove('visible'); resumeOverlay.style.display = 'flex';
            subtitleBtn.classList.add('visible'); hamburgerBtn.classList.add('visible');
            stopProgressBarSimulation();
        }
    } else {
        syncHUDModeDisplay();
        preloadAndPlay("intro");
    }
}

function saveProgress() { if (gameMode === 'chapter' || currentNodeId === null) return; const data = { score: currentScore, node: currentNodeId, index: currentSequenceIndex, subtitles: subtitlesEnabled }; localStorage.setItem('storySaveData', JSON.stringify(data)); }
function clearProgress() { if (gameMode !== 'chapter') localStorage.removeItem('storySaveData'); }

function getActiveFolder(nodeData) {
    let base = nodeData.folder; if (!base.endsWith('/')) base += '/';
    if (subtitlesEnabled) {
        const parts = base.split('/');
        for (let i = 0; i < parts.length; i++) { if (parts[i] !== "" && parts[i] !== "videos" && parts[i] !== "." && parts[i] !== "..") parts[i] += "CC"; }
        return parts.join('/');
    }
    return base;
}

function updateProgressBar() {
    if (gameMode === 'chapter') return;
    const visual = Math.max(0, Math.min(currentScore, MAX_SCORE));
    progressBar.style.width = `${(visual / MAX_SCORE) * 100}%`;
    progressBar.style.backgroundColor = `rgb(0, ${Math.floor(50 + (205 * (visual / MAX_SCORE)))}, 0)`;
    const txt = document.getElementById('score-digital-counter'); if (txt) txt.innerText = `${visual} / ${MAX_SCORE}`;
}

function triggerScoreEffect(amount) {
    if (gameMode === 'chapter') return;
    const bubble = document.getElementById('score-floating-bubble'); if (!bubble) return;
    progressContainer.classList.remove('good-choice-shake', 'bad-choice-shake'); bubble.classList.remove('pop-active', 'plus', 'minus');
    void progressContainer.offsetWidth; void bubble.offsetWidth;
    if (amount > 0) { bubble.innerText = `+${amount}`; bubble.classList.add('pop-active', 'plus'); progressContainer.classList.add('good-choice-shake'); setTimeout(() => progressContainer.classList.remove('good-choice-shake'), 600); }
    else if (amount < 0) { bubble.innerText = `${amount}`; bubble.classList.add('pop-active', 'minus'); progressContainer.classList.add('bad-choice-shake'); setTimeout(() => progressContainer.classList.remove('bad-choice-shake'), 2000); }
}

function attachGameplayAudioListeners() {
    const interactives = document.querySelectorAll('.menu-btn, .dev-btn, .resume-buttons button, #start-btn, #subtitle-btn, #hamburger-btn');
    interactives.forEach(elem => {
        elem.removeEventListener('mouseenter', () => playSoundFX('hover'));
        elem.addEventListener('mouseenter', () => playSoundFX('hover'));
    });
}

// --- CONTROLS LISTENERS ---
resumeYes.addEventListener('click', () => {
    playSoundFX('click'); const data = JSON.parse(localStorage.getItem('storySaveData'));
    currentScore = data.score; currentNodeId = data.node; currentSequenceIndex = data.index; subtitlesEnabled = data.subtitles;
    subtitleBtn.classList.toggle('active', subtitlesEnabled); syncHUDModeDisplay();
    resumeOverlay.style.display = 'none'; stopProgressBarSimulation();
    playCurrentSequenceVideo();
});

resumeNo.addEventListener('click', () => {
    playSoundFX('click'); clearProgress(); resumeOverlay.style.display = 'none';
    syncHUDModeDisplay(); preloadAndPlay("intro");
});

subtitleBtn.addEventListener('click', () => {
    playSoundFX('click'); subtitlesEnabled = !subtitlesEnabled; subtitleBtn.classList.toggle('active', subtitlesEnabled); saveProgress();
    if (currentNodeId !== null && !choicesOverlay.classList.contains('active')) {
        const time = video.currentTime; const isPaused = video.paused;
        video.src = `${getActiveFolder(storyManifest[currentNodeId])}${currentSequenceIndex}.mp4`;
        video.addEventListener('loadedmetadata', () => { video.currentTime = time; if (!isPaused) video.play(); }, { once: true });
    }
});

hamburgerBtn.addEventListener('click', () => { 
    playSoundFX('click'); 
    if (outcomeOverlay.classList.contains('active')) return;
    if (!choicesOverlay.classList.contains('active')) video.pause(); 
    menuMainPanel.classList.add('active'); 
    menuConfirmPanel.classList.remove('active'); 
    pauseMenuOverlay.classList.add('active'); 
});
menuContinue.addEventListener('click', () => { playSoundFX('click'); pauseMenuOverlay.classList.remove('active'); if (!choicesOverlay.classList.contains('active')) video.play(); });
function requestConfirmation(type, msg) { pendingConfirmAction = type; confirmText.innerText = msg; menuMainPanel.classList.remove('active'); menuConfirmPanel.classList.add('active'); }
menuRestart.addEventListener('click', () => { playSoundFX('click'); requestConfirmation('restart', 'Restart the experience?'); });
menuMainMenu.addEventListener('click', () => { playSoundFX('click'); requestConfirmation('mainmenu', 'Return to Main Menu?'); });
confirmNo.addEventListener('click', () => { playSoundFX('click'); menuConfirmPanel.classList.remove('active'); menuMainPanel.classList.add('active'); pendingConfirmAction = null; });
let pendingConfirmAction = null;
confirmYes.addEventListener('click', () => {
    playSoundFX('click');
    if (pendingConfirmAction === 'restart') { clearProgress(); currentScore = 0; syncHUDModeDisplay(); pauseMenuOverlay.classList.remove('active'); playNode("intro"); }
    else if (pendingConfirmAction === 'mainmenu') { window.location.href = "mainMenu.html"; }
});
endMainMenuBtn.addEventListener('click', () => { playSoundFX('click'); window.location.href = "mainMenu.html"; });

// --- PLAYBACK COMPONENT LOGIC ---
function playNode(nodeId) {
    const data = storyManifest[nodeId]; if (data.isRouter) { playNode(data.routeBasedOnScore(currentScore)); return; }
    currentNodeId = nodeId; currentSequenceIndex = 1;
    choicesOverlay.classList.remove('active'); choicesOverlay.innerHTML = '';
    syncHUDModeDisplay(); playCurrentSequenceVideo();
}

function playCurrentSequenceVideo() {
    video.src = `${getActiveFolder(storyManifest[currentNodeId])}${currentSequenceIndex}.mp4`;
    video.play().then(() => {
        triggerGameplayTooltips();
    }).catch(err => console.error(err));
    saveProgress();
}

video.addEventListener('ended', () => {
    const scout = document.createElement('video'); scout.src = `${getActiveFolder(storyManifest[currentNodeId])}${currentSequenceIndex + 1}.mp4`;
    scout.onloadedmetadata = () => { currentSequenceIndex++; playCurrentSequenceVideo(); };
    scout.onerror = () => { handleSequenceEnd(); };
});

function handleSequenceEnd() {
    const data = storyManifest[currentNodeId];
    if (data.choices && data.choices.length > 0) { showChoices(data.choices, data.question); }
    else if (data.outcomeTitle) {
        outcomeTitle.className = (data.outcomeTitle === "Good Job!") ? "good" : "bad";
        if (data.outcomeTitle === "Good Job!") updateChapterStatus('completed'); else updateChapterStatus('failed');
        outcomeTitle.innerText = data.outcomeTitle; outcomeText.innerText = data.outcomeText;
        targetNodeAfterOutcome = data.autoNext; outcomeOverlay.classList.add('active');
    }
    else if (data.autoNext) { preloadAndPlay(data.autoNext); }
    else { clearProgress(); showEndScreen(); }
}

function showEndScreen() {
    hamburgerBtn.classList.remove('visible');
    subtitleBtn.classList.remove('visible');
    if (progressContainer) progressContainer.style.setProperty('display', 'none', 'important');
    if (chapterStatusContainer) chapterStatusContainer.classList.remove('visible');

    const container = document.getElementById('end-performance-report-wrapper');
    if (container) {
        container.innerHTML = ''; 
        const chaptersMetadata = [
            { id: 'intro', label: 'Ch. 1', name: 'The Laundry Room', goodComment: 'Excellent! You successfully recycled the plastic detergent bottle, keeping highly reusable polymers out of the local landfill.', badComment: 'Missed opportunity. Detergent bottles are premium rigid plastics that should always be recycled instead of discarded.' },
            { id: 'chap2', label: 'Ch. 2', name: 'The Drink', goodComment: 'Perfect. Liquid cups are lined with moisture-resistant barrier layers that contaminate plastic lines—landfill was the right choice.', badComment: 'Contamination warning. Putting paper drink cups into standard plastic lines can spoil an entire recycling batch.' },
            { id: 'chap3', label: 'Ch. 3', name: 'The Test', goodComment: 'Great job. Holding onto clean notebook paper ensures wood fibers stay in circulation for manufacturing loops.', badComment: 'Paper belongs in the recycling lines. Throwing school tests into standard trash cans speeds up landfill accumulation.' },
            { id: 'chap4', label: 'Ch. 4', name: 'The Pizza Box', goodComment: 'Brilliant sorting! Tearing off the clean cardboard lid saves good fiber while throwing the greasy base away prevents oil contamination.', badComment: 'Fiber contamination. Greasy pizza box bases ruin clean paper batches because food oils cannot be washed out during processing.' },
            { id: 'chap5', label: 'Ch. 5', name: 'The Bottle', goodComment: 'Spot on. Empty plastic beverage bottles are highly circular commodities and belong exclusively in clean collection bins.', badComment: 'Resource waste. Beverage containers are easily recycled. Sending them to landfills wastes valuable material.' },
            { id: 'chap6', label: 'Ch. 6', name: 'The Trash Finale', goodComment: 'Incredible speed-sorting! You navigated the high-speed sorting line with professional recycling precision.', badComment: 'The rapid gauntlet caught you off guard. Speed-sorting requires identifying common materials quickly under pressure.' }
        ];

        const performanceSource = (gameMode === 'chapter') ? 
            (JSON.parse(localStorage.getItem('chapterStatuses')) || {}) : 
            (window.continuousPerformanceLog || {});

        chaptersMetadata.forEach(ch => {
            const status = performanceSource[ch.id]; 
            const card = document.createElement('div');
            card.className = 'report-card';
            
            let statusClass = 'unplayed-card';
            let commentText = "This objective was not tested or completed during this session track run.";
            
            if (status === 'completed') {
                statusClass = 'completed-card';
                commentText = ch.goodComment;
            } else if (status === 'failed') {
                statusClass = 'failed-card';
                commentText = ch.badComment;
            } else if (gameMode === 'continuous') {
                statusClass = 'failed-card';
                commentText = "Objective failed or skipped during full story run-through operations.";
            }

            card.classList.add(statusClass);
            card.innerHTML = `
                <div class="report-left">
                    <div class="report-chapter-tag">${ch.label} • ${status ? status : 'Unplayed'}</div>
                    <h3 class="report-title">${ch.name}</h3>
                    <p class="report-comment">${commentText}</p>
                </div>
                <div class="report-badge"></div>
            `;
            container.appendChild(card);
        });
    }

    const titleText = document.getElementById('end-dashboard-title');
    if (titleText) {
        titleText.innerText = (gameMode === 'chapter') ? "Chapter Progress Report" : "Story Performance Review";
    }

    endOverlay.classList.add('active');
}

function showChoices(choicesArray, questionText) {
    choicesOverlay.innerHTML = '';
    function renderContent() {
        if (questionText) { const t = document.createElement('h2'); t.id = 'choice-title'; t.innerText = questionText; choicesOverlay.appendChild(t); }
        const container = document.createElement('div'); container.id = 'choice-buttons-container';
        choicesArray.forEach(choice => {
            const btn = document.createElement('button'); btn.classList.add('choice-btn'); btn.innerText = choice.text;
            btn.addEventListener('mouseenter', () => playSoundFX('hover'));
            btn.addEventListener('click', () => {
                playSoundFX('click');
                if (countdownTimerInterval) { clearInterval(countdownTimerInterval); timerSound.loop = false; timerSound.pause(); }
                timerContainer.style.display = 'none'; triggerScoreEffect(choice.valueChange);
                currentScore = Math.max(0, currentScore + choice.valueChange);
                updateProgressBar(); playNode(choice.nextNode);
            });
            container.appendChild(btn);
        });
        choicesOverlay.appendChild(container);
    }

    const nodeData = storyManifest[currentNodeId];
    if (nodeData.timeLimit) {
        const radius = timerCircle.r.baseVal.value; const circ = radius * 2 * Math.PI;
        timerCircle.style.strokeDasharray = `${circ} ${circ}`; timerCircle.style.strokeDashoffset = 0; timerCircle.style.stroke = "#0f0";
        timerContainer.style.display = 'flex'; timerContainer.className = 'intro-anim';
        choicesOverlay.appendChild(timerContainer); choicesOverlay.classList.add('active');
        setTimeout(() => { timerContainer.className = 'settled'; renderContent(); }, 1200);
        timerSound.currentTime = 0; timerSound.loop = true; timerSound.play().catch(e => console.warn(e));
        const total = nodeData.timeLimit * 1000; const start = Date.now();
        if (countdownTimerInterval) clearInterval(countdownTimerInterval);
        countdownTimerInterval = setInterval(() => {
            const elapsed = Date.now() - start; let left = Math.ceil((total - elapsed) / 1000);
            if (left < 0) left = 0; timerText.innerText = left;
            timerCircle.style.strokeDashoffset = circ - (Math.max(0, 1 - (elapsed / total)) * circ);
            if (left <= 3) timerCircle.style.stroke = "#f00";
            if (elapsed >= total) {
                clearInterval(countdownTimerInterval); timerContainer.style.display = 'none'; timerSound.pause(); timerSound.loop = false;
                updateChapterStatus('failed'); triggerScoreEffect(-100); currentScore = Math.max(0, currentScore - 100); updateProgressBar();
                playNode(nodeData.timeoutNode);
            }
        }, 50);
    } else {
        timerContainer.style.display = 'none'; choicesOverlay.appendChild(timerContainer); renderContent(); choicesOverlay.classList.add('active');
    }
}

function preloadAndPlay(targetNodeId) {
    const loader = document.getElementById('chapter-loader-overlay'); const bar = document.getElementById('loader-progress-bar');
    bar.style.width = '0%'; loader.classList.add('active');
    let actData = storyManifest[targetNodeId]; let actPlay = targetNodeId;
    if (actData && actData.isRouter) { actPlay = actData.routeBasedOnScore(currentScore); actData = storyManifest[actPlay]; }
    const path = `${getActiveFolder(actData)}1.mp4`;
    const minTime = new Promise(res => {
        let fake = 0; const progress = setInterval(() => { fake += Math.random() * 15; if (fake > 90) fake = 90; bar.style.width = `${fake}%`; }, 200);
        setTimeout(() => { clearInterval(progress); res(); }, 1500);
    });
    const vLoad = new Promise(res => { const v = document.createElement('video'); v.preload = 'auto'; v.src = path; v.oncanplaythrough = () => res(); v.onerror = () => res(); v.load(); });
    Promise.all([minTime, vLoad]).then(() => { bar.style.width = '100%'; setTimeout(() => { loader.classList.remove('active'); setTimeout(() => playNode(actPlay), 600); }, 400); });
}

outcomeNextBtn.addEventListener('click', () => { playSoundFX('click'); outcomeOverlay.classList.remove('active'); preloadAndPlay(targetNodeAfterOutcome); });
devCloseBtn.addEventListener('click', () => { playSoundFX('click'); devMenuOverlay.classList.remove('active'); });
function checkDevPasscode() { if (devPasscodeInput.value === 'bgDev') { isDevAuthenticated = true; devAuthContainer.style.display = 'none'; devContent.style.display = 'flex'; } else { devAuthError.style.display = 'block'; devPasscodeInput.value = ''; devPasscodeInput.focus(); } }
devPasscodeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') checkDevPasscode(); });
devAuthCloseBtn.addEventListener('click', () => { playSoundFX('click'); devMenuOverlay.classList.remove('active'); });
devBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        playSoundFX('click'); const t = e.target.getAttribute('data-node');
        currentScore = (t === 'intro') ? 0 : (t === 'chap2') ? 160 : (t === 'chap3') ? 320 : (t === 'chap4') ? 480 : (t === 'chap5') ? 640 : (t === 'chap6') ? 800 : 1000;
        updateProgressBar(); pauseMenuOverlay.classList.remove('active'); choicesOverlay.classList.remove('active'); devMenuOverlay.classList.remove('active');
        preloadAndPlay(t);
    });
});

document.addEventListener('keydown', (e) => {
    if ((e.key === 'p' || e.key === 'P') && currentNodeId !== null) { devMenuOverlay.classList.toggle('active'); if (devMenuOverlay.classList.contains('active') && !isDevAuthenticated) { devPasscodeInput.value = ''; devAuthError.style.display = 'none'; setTimeout(() => devPasscodeInput.focus(), 100); } }
    if (e.key === 'Escape' && currentNodeId !== null) { 
        if (outcomeOverlay.classList.contains('active')) return;
        if (pauseMenuOverlay.classList.contains('active')) { if (menuConfirmPanel.classList.contains('active')) confirmNo.click(); else menuContinue.click(); } else hamburgerBtn.click(); 
    }
});

checkSaveData();
attachGameplayAudioListeners();