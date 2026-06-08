// --- 1. THE STORY MANIFEST ---
const storyManifest = {
    // --- CHAPTER 1 --- (Good choice: LEFT)
    "intro": {
        folder: "videos/1/",
        question: "Where should Mikey throw the detergent bin?",
        choices: [
            { text: "Look for Another Bin", valueChange: 1.6, nextNode: "1g" },
            { text: "Throw in Trash can", valueChange: -3.2, nextNode: "1b" }
        ]
    },
    "1g": {
        folder: "videos/1/1g/",
        autoNext: "chap2",
        outcomeTitle: "Good Job!",
        outcomeText: "You looked for another bin. Detergent bottles are recyclable and should never go in the landfill."
    },
    "1b": {
        folder: "videos/1/1b/",
        autoNext: "chap2",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "Detergent bottles are highly recyclable plastic. Throwing them in the trash fills up landfills unnecessarily."
    },

    // --- CHAPTER 2 --- (Good choice: RIGHT)
    "chap2": {
        folder: "videos/2/",
        question: "Where should Mikey throw the cup?",
        choices: [
            { text: "Plastic Bin", valueChange: -3.2, nextNode: "2b" },
            { text: "Landfill Bin", valueChange: 1.6, nextNode: "2g" }
        ]
    },
    "2g": {
        folder: "videos/2/2g/",
        autoNext: "chap3",
        outcomeTitle: "Good Job!",
        outcomeText: "You successfully managed to throw the cup away."
    },
    "2b": {
        folder: "videos/2/2b/",
        autoNext: "chap3",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "Empty your cup at all times, and throw it in the landfill as it's not recyclable!"
    },

    // --- CHAPTER 3 --- (Good choice: RIGHT)
    "chap3": {
        folder: "videos/3/",
        question: "Where should Mikey throw the test away?",
        choices: [
            { text: "In Classroom Trash Can", valueChange: -3.2, nextNode: "3b" },
            { text: "Look for Another Bin", valueChange: 1.6, nextNode: "3g" }
        ]
    },
    "3g": {
        folder: "videos/3/3g/",
        autoNext: "chap4",
        outcomeTitle: "Good Job!",
        outcomeText: "The paper test can now successfully be recycled."
    },
    "3b": {
        folder: "videos/3/3b/",
        autoNext: "chap4",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "A waste of paper! It's better to throw the test in a paper bin instead of a standard trash can so the paper can be recycled."
    },

    // --- CHAPTER 4 --- (Good choice: LEFT)
    "chap4": {
        folder: "videos/4/",
        question: "What should Mikey do?",
        choices: [
            { text: "Throw in Multiple Bins", valueChange: 1.6, nextNode: "4g" },
            { text: "Throw in Paper Bin", valueChange: -3.2, nextNode: "4b" }
        ]
    },
    "4g": {
        folder: "videos/4/4g/",
        autoNext: "chap5",
        outcomeTitle: "Good Job!",
        outcomeText: "Greasy pizza boxes still contain clean cardboard. Great job on separating it!"
    },
    "4b": {
        folder: "videos/4/4b/",
        autoNext: "chap5",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "The pizza box was greasy, and contaminates the clean paper that's already in the bin."
    },

    // --- CHAPTER 5 --- (Good choice: RIGHT)
    "chap5": {
        folder: "videos/5/",
        question: "Where should Mikey Throw the Empty Bottle?",
        choices: [
            { text: "Landfill Bin", valueChange: -3.2, nextNode: "5b" },
            { text: "Plastic Bin", valueChange: 1.6, nextNode: "5g" }
        ]
    },
    "5g": {
        folder: "videos/5/5g/",
        autoNext: "chap6",
        outcomeTitle: "Good Job!",
        outcomeText: "Plastic bottles and jugs go into the plastic bin, nothing else."
    },
    "5b": {
        folder: "videos/5/5b/",
        autoNext: "chap6",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "Plastic bottles and jugs go into the plastic bin, it's a waste to throw it into the landfill bin!"
    },

    // --- CHAPTER 6 (THE GAUNTLET) ---
    "chap6": {
        folder: "videos/6/",
        question: "Where should Mikey throw his FRY BOX away?",
        timeLimit: 10,
        timeoutNode: "6b_time",
        choices: [
            { text: "Paper Bin", valueChange: -1.0, nextNode: "6b_1" },
            { text: "Metal Cans Bin", valueChange: -1.0, nextNode: "6b_1" },
            { text: "Plastic Bin", valueChange: -1.0, nextNode: "6b_1" },
            { text: "Landfill Bin", valueChange: 0.5, nextNode: "6c2" }
        ]
    },
    "6c2": {
        folder: "videos/6/6c2/",
        question: "Where should Mikey throw his CLEAN PAPER BAG away?",
        timeLimit: 10,
        timeoutNode: "6b_time",
        choices: [
            { text: "Paper Bin", valueChange: 0.5, nextNode: "6c3" },
            { text: "Metal Cans Bin", valueChange: -1.0, nextNode: "6b_2" },
            { text: "Plastic Bin", valueChange: -1.0, nextNode: "6b_2" },
            { text: "Landfill Bin", valueChange: -1.0, nextNode: "6b_2" }
        ]
    },
    "6c3": {
        folder: "videos/6/6c3/",
        question: "Where should Mikey throw his SODA CAN away?",
        timeLimit: 10,
        timeoutNode: "6b_time",
        choices: [
            { text: "Paper Bin", valueChange: -1.0, nextNode: "6b_3" },
            { text: "Metal Cans Bin", valueChange: 0.5, nextNode: "6c4" },
            { text: "Plastic Bin", valueChange: -1.0, nextNode: "6b_3" },
            { text: "Landfill Bin", valueChange: -1.0, nextNode: "6b_3" }
        ]
    },
    "6c4": {
        folder: "videos/6/6c4/",
        question: "Where should Mikey throw his PLASTIC BOTTLE away?",
        timeLimit: 10,
        timeoutNode: "6b_time",
        choices: [
            { text: "Paper Bin", valueChange: -1.0, nextNode: "6b_4" },
            { text: "Metal Cans Bin", valueChange: -1.0, nextNode: "6b_4" },
            { text: "Plastic Bin", valueChange: 0.5, nextNode: "6g" },
            { text: "Landfill Bin", valueChange: -1.0, nextNode: "6b_4" }
        ]
    },

    // --- CHAPTER 6 ENDINGS ---
    "6g": {
        folder: "videos/6/6g/",
        autoNext: "chap7",
        outcomeTitle: "Good Job!",
        outcomeText: "You successfully sorted all the items into their proper bins!"
    },
    "6b_time": {
        folder: "videos/6/6b/",
        autoNext: "chap7",
        outcomeTitle: "Time's Up!",
        outcomeText: "Your time ran out and Mikey got nervous, be quicker next time!"
    },
    "6b_1": {
        folder: "videos/6/6b/",
        autoNext: "chap7",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "A Fry Box gets greasy because of the fries. Goes into landfill as it contaminates clean paper!"
    },
    "6b_2": {
        folder: "videos/6/6b/",
        autoNext: "chap7",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "The paper bag is clean enough to go into the paper recycling bin!"
    },
    "6b_3": {
        folder: "videos/6/6b/",
        autoNext: "chap7",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "Empty metal cans go in the metal cans bin!"
    },
    "6b_4": {
        folder: "videos/6/6b/",
        autoNext: "chap7",
        outcomeTitle: "Wrong Answer!",
        outcomeText: "Empty plastic bottles go in the plastic bin!"
    },

    // --- CHAPTER 7 (THE SCORE ROUTER) ---
    "chap7": {
        isRouter: true,
        routeBasedOnScore: function (score) {
            if (score >= 9.9) {
                return "7p"; // Perfect Score (10)
            } else if (score >= 6.5) {
                return "7g"; // Good Score (Pass threshold matching original 66%)
            } else {
                return "7b"; // Bad Score
            }
        }
    },

    // --- FINAL ENDINGS ---
    "7p": { folder: "videos/7/7p/" },
    "7g": { folder: "videos/7/7g/" },
    "7b": { folder: "videos/7/7b/" }
};

// --- 2. PLAYER VARIABLES ---
const video = document.getElementById('story-video');
const startBtn = document.getElementById('start-btn');
const choicesOverlay = document.getElementById('choices-overlay');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const subtitleBtn = document.getElementById('subtitle-btn');

// NEW: Resume variables
const resumeOverlay = document.getElementById('resume-overlay');
const resumeYes = document.getElementById('resume-yes');
const resumeNo = document.getElementById('resume-no');

let currentScore = 0;
let currentNodeId = null;
let currentSequenceIndex = 1;
let subtitlesEnabled = false;
const MAX_SCORE = 10; // CHANGED: Scales perfectly with our 1.6 and 0.5 point distribution

// NEW: Pause Menu Variables
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

let pendingConfirmAction = null; // Tracks what the user is confirming (restart or mainmenu)

// NEW: End Screen Variables
const endOverlay = document.getElementById('end-overlay');
const endMainMenuBtn = document.getElementById('end-mainmenu');

// NEW: Developer Menu Variables
const devMenuOverlay = document.getElementById('dev-menu-overlay');
const devCloseBtn = document.getElementById('dev-close-btn');
const devBtns = document.querySelectorAll('.dev-btn');

// NEW: Developer Menu Auth Variables
const devAuthContainer = document.getElementById('dev-auth-container');
const devContent = document.getElementById('dev-content');
const devPasscodeInput = document.getElementById('dev-passcode-input');
const devAuthError = document.getElementById('dev-auth-error');
const devAuthCloseBtn = document.getElementById('dev-auth-close-btn');
let isDevAuthenticated = false; // Tracks if they already unlocked it this session

// NEW: Outcome & Preloader Variables
const outcomeOverlay = document.getElementById('outcome-overlay');
const outcomeTitle = document.getElementById('outcome-title');
const outcomeText = document.getElementById('outcome-text');
const outcomeNextBtn = document.getElementById('outcome-next-btn');

const chapterLoader = document.getElementById('chapter-loader-overlay');
let targetNodeAfterOutcome = null; // Stores where we go after the outcome screen

// NEW: Timer Variables
const timerContainer = document.getElementById('timer-container');
const timerText = document.getElementById('timer-text');
const timerCircle = document.querySelector('.progress-ring__circle');
let countdownTimerInterval = null; // Holds the active timer so we can kill it
const timerSound = document.getElementById('timer-sound'); // NEW: The audio element
// NEW: Progress Bar Simulation Variables & Functions
let progressBarSimulationInterval = null;

function startProgressBarSimulation() {
    let growing = true;
    let simulatedScore = 0;
    
    if (progressBarSimulationInterval) clearInterval(progressBarSimulationInterval);
    
    // Creates a smooth loop filling and draining the bar at 50 frames per second
    progressBarSimulationInterval = setInterval(() => {
        if (growing) {
            simulatedScore += 0.08;
            if (simulatedScore >= MAX_SCORE) {
                simulatedScore = MAX_SCORE;
                growing = false;
            }
        } else {
            simulatedScore -= 0.08;
            if (simulatedScore <= 0) {
                simulatedScore = 0;
                growing = true;
            }
        }
        
        // Dynamically matches your core color and width formula
        const widthPercentage = (simulatedScore / MAX_SCORE) * 100;
        const greenIntensity = Math.floor(50 + (205 * (simulatedScore / MAX_SCORE)));

        progressBar.style.width = `${widthPercentage}%`;
        progressBar.style.backgroundColor = `rgb(0, ${greenIntensity}, 0)`;
    }, 20); 
}

function stopProgressBarSimulation() {
    if (progressBarSimulationInterval) {
        clearInterval(progressBarSimulationInterval);
        progressBarSimulationInterval = null;
    }
}
// Button listener to go back to the main menu
endMainMenuBtn.addEventListener('click', () => {
    window.location.href = "mainMenu.html";
});

// --- 3. SAVE STATE LOGIC (NEW) ---

// Saves the current state of the game to the browser's memory
function saveProgress() {
    // We don't save if the story hasn't officially started yet
    if (currentNodeId === null) return;

    const saveData = {
        score: currentScore,
        node: currentNodeId,
        index: currentSequenceIndex,
        subtitles: subtitlesEnabled
    };
    localStorage.setItem('storySaveData', JSON.stringify(saveData));
}

// Wipes the save data (used when restarting or finishing the game)
function clearProgress() {
    localStorage.removeItem('storySaveData');
}

// Check for existing save data immediately when the page loads
function checkSaveData() {
    const savedString = localStorage.getItem('storySaveData');
    if (savedString) {
        // We have a save file! Ensure start button stays hidden, pop open resume layout
        startBtn.classList.remove('visible');
        resumeOverlay.style.display = 'flex';
        
        // Immediately show navigation tools when continuing
        subtitleBtn.classList.add('visible');
        hamburgerBtn.classList.add('visible');
        
        // Hide tooltips via class
        const tooltips = document.querySelectorAll('.menu-tooltip, .cc-tooltip, .progress-tooltip');
        tooltips.forEach(t => t.classList.add('fade-out'));
        
        stopProgressBarSimulation();
    } else {
        // FRESH START SCREEN SEQUENCE:
        // 1. Instantly reveal menu, CC utility modules, and progress container outline smoothly
        setTimeout(() => {
            subtitleBtn.classList.add('visible');
            hamburgerBtn.classList.add('visible');
            
            // Show progress bar container background track + reveal its onboarding tooltip
            progressContainer.style.display = 'block';
            progressContainer.classList.add('visible');
            
            const progTooltip = document.querySelector('.progress-tooltip');
            if (progTooltip) progTooltip.classList.add('visible');
        }, 200);

        // 2. Wait exactly 3 seconds, then reveal start button. Tooltips stay visible!
        setTimeout(() => {
            startBtn.classList.add('visible');
        }, 3000);

        // Start the progress bar simulation loop
        startProgressBarSimulation();
    }
}

// --- 4. CORE ENGINE FUNCTIONS ---

function getActiveFolder(nodeData) {
    let baseFolder = nodeData.folder;

    // 1. BULLETPROOFING: Make sure there is always a trailing slash!
    // If the manifest says "videos/1/1g" instead of "videos/1/1g/", this fixes it automatically.
    if (!baseFolder.endsWith('/')) {
        baseFolder += '/';
    }

    if (subtitlesEnabled) {
        // Break the path apart
        const parts = baseFolder.split('/');

        for (let i = 0; i < parts.length; i++) {
            // Only add "CC" if it is a real folder name (not empty, not "videos")
            if (parts[i] !== "" && parts[i] !== "videos" && parts[i] !== "." && parts[i] !== "..") {
                parts[i] = parts[i] + "CC";
            }
        }

        const finalPath = parts.join('/');
        console.log(`🎬 [CC Router] Translated path from '${baseFolder}' to '${finalPath}'`);
        return finalPath;
    }

    return baseFolder;
}

function updateProgressBar() {
    const visualScore = Math.max(0, Math.min(currentScore, MAX_SCORE));
    const widthPercentage = (visualScore / MAX_SCORE) * 100;
    const greenIntensity = Math.floor(50 + (205 * (visualScore / MAX_SCORE)));

    progressBar.style.width = `${widthPercentage}%`;
    progressBar.style.backgroundColor = `rgb(0, ${greenIntensity}, 0)`;
}

// --- BUTTON LISTENERS ---

startBtn.addEventListener('click', () => {
    console.log("1. Start button clicked!");
    startBtn.classList.remove('visible'); // Smoothly hide the start button
    progressContainer.style.display = 'block';
    
    // Stop the progress bar looping simulation immediately
    stopProgressBarSimulation();

    // Clean up tooltip elements from DOM tree by fading them out smoothly
    const tooltips = document.querySelectorAll('.menu-tooltip, .cc-tooltip, .progress-tooltip');
    tooltips.forEach(t => {
        t.classList.add('fade-out');
    });
    console.log("2. UI elements revealed!");

    updateProgressBar();
    preloadAndPlay("intro");
});

// Resume button: Parse the save file and restore the variables
resumeYes.addEventListener('click', () => {
    const savedString = localStorage.getItem('storySaveData');
    const saveData = JSON.parse(savedString);

    currentScore = saveData.score;
    currentNodeId = saveData.node;
    currentSequenceIndex = saveData.index;
    subtitlesEnabled = saveData.subtitles;

    // Restore UI states
    subtitleBtn.classList.toggle('active', subtitlesEnabled);
    updateProgressBar();

    resumeOverlay.style.display = 'none';
    progressContainer.style.display = 'block';
    
    // UPDATED: Smoothly reveal navigation tools via classes instead of hard display inline rules
    subtitleBtn.classList.add('visible');
    hamburgerBtn.classList.add('visible');

    // Stop the simulation loop because they chose to resume existing progress
    stopProgressBarSimulation();

    // Instantly hide onboarding tooltips since they're resuming
    const tooltips = document.querySelectorAll('.menu-tooltip, .cc-tooltip, .progress-tooltip');
    tooltips.forEach(t => t.classList.add('fade-out'));

    // Jump straight into the exact video where they left off
    playCurrentSequenceVideo();
});

// Restart button: Wipe the save and show the start button cleanly with onboarding visuals
resumeNo.addEventListener('click', () => {
    clearProgress();
    resumeOverlay.style.display = 'none';
    
    // Re-adds the .visible class so the start button fades back in!
    startBtn.classList.add('visible'); 
    
    // Keep tracking utility blocks active on screen for layout positioning
    subtitleBtn.classList.add('visible');
    hamburgerBtn.classList.add('visible');
    progressContainer.style.display = 'block';
    progressContainer.classList.add('visible');
    
    // Bring back onboarding tooltip callouts smoothly by removing fade-out and enforcing visibility
    const tooltips = document.querySelectorAll('.menu-tooltip, .cc-tooltip, .progress-tooltip');
    tooltips.forEach(t => {
        t.classList.remove('fade-out');
        t.classList.add('visible'); // FIX: Directly reinforces the .visible class state for the progress tooltip!
    });

    // Fire back up the looping visualization metrics animation cue
    startProgressBarSimulation();
});

subtitleBtn.addEventListener('click', () => {
    subtitlesEnabled = !subtitlesEnabled;
    subtitleBtn.classList.toggle('active', subtitlesEnabled);
    saveProgress(); // Update the save file with the new subtitle preference

    if (currentNodeId !== null && !choicesOverlay.classList.contains('active')) {
        const currentTime = video.currentTime;
        const isPaused = video.paused;
        const nodeData = storyManifest[currentNodeId];

        video.src = `${getActiveFolder(nodeData)}${currentSequenceIndex}.mp4`;

        video.addEventListener('loadedmetadata', () => {
            video.currentTime = currentTime;
            if (!isPaused) {
                video.play();
            }
        }, { once: true });
    }
});

// --- PAUSE MENU LOGIC ---

// Open Menu
hamburgerBtn.addEventListener('click', () => {
    // Only pause the video if we aren't currently waiting for the user to make a narrative choice
    if (!choicesOverlay.classList.contains('active')) {
        video.pause();
    }

    // Reset to the main panel
    menuMainPanel.classList.add('active');
    menuConfirmPanel.classList.remove('active');

    pauseMenuOverlay.classList.add('active');
});

// Continue Button
menuContinue.addEventListener('click', () => {
    pauseMenuOverlay.classList.remove('active');

    // Only play the video if they weren't in the middle of a narrative choice
    if (!choicesOverlay.classList.contains('active')) {
        video.play();
    }
});

// Helper function to switch to the confirm panel
function requestConfirmation(actionType, message) {
    pendingConfirmAction = actionType;
    confirmText.innerText = message;

    menuMainPanel.classList.remove('active');
    menuConfirmPanel.classList.add('active');
}

// Restart & Main Menu Buttons (Trigger Confirmation)
menuRestart.addEventListener('click', () => {
    requestConfirmation('restart', 'Restart the experience?');
});

menuMainMenu.addEventListener('click', () => {
    requestConfirmation('mainmenu', 'Return to Main Menu?');
});

// "No, go back" Button
confirmNo.addEventListener('click', () => {
    // Slide back to the main menu options
    menuConfirmPanel.classList.remove('active');
    menuMainPanel.classList.add('active');
    pendingConfirmAction = null;
});

// "Yes" Confirm Button
confirmYes.addEventListener('click', () => {
    if (pendingConfirmAction === 'restart') {
        clearProgress(); // Wipe the save
        currentScore = 0; // Reset score

        updateProgressBar(); // NEW: Tell the UI to redraw the empty bar!

        pauseMenuOverlay.classList.remove('active');
        playNode("intro"); // Start from the beginning

    } else if (pendingConfirmAction === 'mainmenu') {
        // Redirect to the main menu page
        window.location.href = "mainMenu.html";
    }
});

// --- VIDEO PLAYER LOGIC ---

function playNode(nodeId) {
    const nodeData = storyManifest[nodeId];

    // --- NEW: DYNAMIC ROUTING LOGIC ---
    // If this is a router node, calculate the path and instantly jump to it!
    if (nodeData.isRouter) {
        const destinationNode = nodeData.routeBasedOnScore(currentScore);
        console.log(`🔀 [Router] Score is ${currentScore}. Jumping to: ${destinationNode}`);
        playNode(destinationNode);
        return; // Stop here so we don't try to play the invisible router node
    }

    // --- STANDARD PLAYBACK LOGIC ---
    currentNodeId = nodeId;
    currentSequenceIndex = 1;
    choicesOverlay.classList.remove('active');
    choicesOverlay.innerHTML = '';

    playCurrentSequenceVideo();
}

// Replace your playCurrentSequenceVideo function with this:
function playCurrentSequenceVideo() {
    const nodeData = storyManifest[currentNodeId];
    const videoPath = `${getActiveFolder(nodeData)}${currentSequenceIndex}.mp4`;

    console.log(`3. Attempting to load video at: ${videoPath}`);
    video.src = videoPath;

    // We explicitly catch any playback errors so they don't happen in silence
    video.play().then(() => {
        console.log("4. SUCCESS: Video is playing!");
    }).catch((err) => {
        console.error(`🚨 ERROR: The browser blocked playback or couldn't find the file at '${videoPath}'.`, err);
    });

    saveProgress();
}

video.addEventListener('ended', () => {
    const nodeData = storyManifest[currentNodeId];
    const nextIndex = currentSequenceIndex + 1;

    const nextVideoUrl = `${getActiveFolder(nodeData)}${nextIndex}.mp4`;

    const scout = document.createElement('video');
    scout.src = nextVideoUrl;

    scout.onloadedmetadata = () => {
        currentSequenceIndex++;
        playCurrentSequenceVideo();
    };

    scout.onerror = () => {
        handleSequenceEnd();
    };
});

function handleSequenceEnd() {
    const nodeData = storyManifest[currentNodeId];

    // 1. If there are choices, show the buttons
    if (nodeData.choices && nodeData.choices.length > 0) {
        showChoices(nodeData.choices, nodeData.question);
    }
    // 2. NEW: If there is an outcome screen defined, freeze frame and show feedback!
    else if (nodeData.outcomeTitle) {
        // Style the title red or green based on the text
        if (nodeData.outcomeTitle === "Good Job!") {
            outcomeTitle.className = "good";
        } else {
            outcomeTitle.className = "bad";
        }

        outcomeTitle.innerText = nodeData.outcomeTitle;
        outcomeText.innerText = nodeData.outcomeText;
        targetNodeAfterOutcome = nodeData.autoNext; // Remember where to go next

        outcomeOverlay.classList.add('active'); // Reveal the overlay over the paused video
    }
    // 3. If there is an autoNext but NO outcome screen, go straight to the loader
    else if (nodeData.autoNext) {
        preloadAndPlay(nodeData.autoNext);
    }
    // 4. Otherwise, the game is completely over
    else {
        console.log("Story complete! Final Score:", currentScore);
        clearProgress();
        showEndScreen();
    }
}

// A helper function to cleanly reveal the end screen and hide the UI
function showEndScreen() {
    // Hide the other UI elements for a clean cinematic ending
    // UPDATED: Smoothly transition them away via visibility classes rather than breaking animations
    hamburgerBtn.classList.remove('visible');
    subtitleBtn.classList.remove('visible');
    progressContainer.style.display = 'none';

    // Reveal the end screen
    endOverlay.classList.add('active');
}

function showChoices(choicesArray, questionText) {
    choicesOverlay.innerHTML = ''; 
    const nodeData = storyManifest[currentNodeId]; // Grab current node info

    // NEW HELPER: Encapsulates building the title and buttons so we can delay them
    function renderContent() {
        // 1. Create and add the title
        if (questionText) {
            const titleElement = document.createElement('h2');
            titleElement.id = 'choice-title';
            titleElement.innerText = questionText;
            choicesOverlay.appendChild(titleElement);
        }

        // 2. Create the buttons container
        const btnContainer = document.createElement('div');
        btnContainer.id = 'choice-buttons-container';

        // 3. Generate the buttons
        choicesArray.forEach(choice => {
            const btn = document.createElement('button');
            btn.classList.add('choice-btn');
            btn.innerText = choice.text;

            btn.addEventListener('click', () => {
                // Stop the timer if they click in time!
                if(countdownTimerInterval) {
                    clearInterval(countdownTimerInterval);
                    timerSound.loop = false;
                    timerSound.pause();
                }
                timerContainer.style.display = 'none'; 

                currentScore += choice.valueChange;
                if (currentScore < 0) {
                    currentScore = 0;
                }
                updateProgressBar();
                playNode(choice.nextNode);
            });

            btnContainer.appendChild(btn);
        });

        // 4. Reveal it
        choicesOverlay.appendChild(btnContainer);
    }

    // --- TIMER LOGIC ---
    if (nodeData.timeLimit) {
        // Prepare the SVG math
        const radius = timerCircle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        timerCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        
        // Reset visuals
        timerCircle.style.strokeDashoffset = 0;
        timerCircle.style.stroke = "#0f0"; // Start Green
        timerContainer.style.display = 'flex';
        
        // Apply cinematic slide-down intro animation classes
        timerContainer.classList.remove('settled');
        timerContainer.classList.add('intro-anim');
        
        // Append timerContainer immediately so it displays during intro animation
        choicesOverlay.appendChild(timerContainer);
        choicesOverlay.classList.add('active');
        
        // ADJUSTED: Let the timer flash, and spawn the questions/buttons ONLY when it settles!
        setTimeout(() => {
            timerContainer.classList.remove('intro-anim');
            timerContainer.classList.add('settled');
            
            // Spawns question text and answers right as the clock hits the top bar position
            renderContent(); 
        }, 1200);
        
        // Reset and enable audio looping immediately
        timerSound.currentTime = 0;
        timerSound.loop = true; 
        timerSound.play().catch(err => console.warn("Audio blocked by browser:", err));
        
        const totalMs = nodeData.timeLimit * 1000;
        const startTime = Date.now();
        
        if(countdownTimerInterval) clearInterval(countdownTimerInterval);

        countdownTimerInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            let timeLeft = Math.ceil((totalMs - elapsed) / 1000);
            
            if (timeLeft < 0) timeLeft = 0;
            timerText.innerText = timeLeft;

            const percentage = Math.max(0, 1 - (elapsed / totalMs));
            const offset = circumference - (percentage * circumference);
            timerCircle.style.strokeDashoffset = offset;

            if (timeLeft <= 3) {
                timerCircle.style.stroke = "#f00";
            }

            if (elapsed >= totalMs) {
                clearInterval(countdownTimerInterval);
                timerContainer.style.display = 'none'; 
                
                timerSound.pause();
                timerSound.loop = false;
                
                currentScore -= 1;
                if(currentScore < 0) currentScore = 0;
                updateProgressBar();
                playNode(nodeData.timeoutNode);
            }
        }, 50);

    } else {
        // Standard non-timed chapters load everything all at once
        timerContainer.style.display = 'none';
        choicesOverlay.appendChild(timerContainer);
        renderContent();
        choicesOverlay.classList.add('active');
    }
}

// INITIALIZE: Run this immediately to see what UI to display
checkSaveData();

// --- KEYBOARD CONTROLS ---
document.addEventListener('keydown', (event) => {

    // NEW: Developer Menu Toggle (Press 'P')
    if ((event.key === 'p' || event.key === 'P') && currentNodeId !== null) {
        devMenuOverlay.classList.toggle('active');

        // If the menu was just opened and isn't authenticated yet, focus the input!
        if (devMenuOverlay.classList.contains('active') && !isDevAuthenticated) {
            devPasscodeInput.value = ''; // Clear old attempts
            devAuthError.style.display = 'none';
            // Slight delay ensures the CSS transition allows focus
            setTimeout(() => devPasscodeInput.focus(), 100);
        }
    }

    // Only trigger if the key pressed was 'Escape' AND the story has actually started
    if (event.key === 'Escape' && currentNodeId !== null) {

        // 1. If the menu is currently OPEN
        if (pauseMenuOverlay.classList.contains('active')) {

            // Are they looking at the "Are you sure?" confirmation screen?
            if (menuConfirmPanel.classList.contains('active')) {
                confirmNo.click(); // Escape cancels the confirmation
            } else {
                menuContinue.click(); // Escape closes the menu and resumes the game
            }

        }
        // 2. If the menu is currently CLOSED
        else {
            hamburgerBtn.click(); // Escape opens the pause menu
        }
    }
});

// --- PRELOADER LOGIC ---
function preloadAndPlay(targetNodeId) {
    const chapterLoader = document.getElementById('chapter-loader-overlay');
    const loaderProgressBar = document.getElementById('loader-progress-bar');

    // 1. Reset the bar to 0 and fade IN the loading screen
    loaderProgressBar.style.width = '0%';
    chapterLoader.classList.add('active');

    let actualNodeData = storyManifest[targetNodeId];
    let actualNodeToPlay = targetNodeId;

    if (actualNodeData && actualNodeData.isRouter) {
        actualNodeToPlay = actualNodeData.routeBasedOnScore(currentScore);
        actualNodeData = storyManifest[actualNodeToPlay];
    }

    const videoPath = `${getActiveFolder(actualNodeData)}1.mp4`;
    console.log(`⏳ [Preloader] Starting transition to: ${videoPath}`);

    // --- PROMISE 1: Enforce a minimum display time & fake progress animation ---
    const minimumTimePromise = new Promise(resolve => {
        let fakeProgress = 0;

        // Tick up the progress bar artificially
        const progressInterval = setInterval(() => {
            fakeProgress += Math.random() * 15; // Jump by random chunks
            if (fakeProgress > 90) fakeProgress = 90; // Hang at 90% if video is still buffering
            loaderProgressBar.style.width = `${fakeProgress}%`;
        }, 200);

        // Strict 1.5-second minimum timer
        setTimeout(() => {
            clearInterval(progressInterval);
            resolve();
        }, 1500);
    });

    // --- PROMISE 2: The actual video buffering ---
    const videoLoadPromise = new Promise((resolve) => {
        const preloaderVideo = document.createElement('video');
        preloaderVideo.preload = 'auto';
        preloaderVideo.src = videoPath;

        // Resolve when the browser confirms it can play the video smoothly
        preloaderVideo.oncanplaythrough = () => resolve();

        // Resolve anyway on error so we don't soft-lock the player on a loading screen
        preloaderVideo.onerror = () => resolve();

        preloaderVideo.load();
    });

    // --- THE MAGIC: Wait for BOTH promises to finish ---
    Promise.all([minimumTimePromise, videoLoadPromise]).then(() => {
        // Snap the bar to 100%
        loaderProgressBar.style.width = '100%';

        // Wait 400ms for the user to see it hit 100%, then fade out and play
        setTimeout(() => {
            chapterLoader.classList.remove('active');

            // Wait for the fade out transition to finish before starting the video
            setTimeout(() => {
                playNode(actualNodeToPlay);
            }, 600); // 600ms matches the CSS transition time

        }, 400);
    });
}

// --- OUTCOME SCREEN LOGIC ---
// This was the missing event listener!
outcomeNextBtn.addEventListener('click', () => {
    outcomeOverlay.classList.remove('active');
    preloadAndPlay(targetNodeAfterOutcome);
});

// --- DEVELOPER MENU LOGIC ---
devCloseBtn.addEventListener('click', () => {
    devMenuOverlay.classList.remove('active');
});

// --- DEV MENU AUTHENTICATION LOGIC ---
function checkDevPasscode() {
    if (devPasscodeInput.value === 'bgDev') {
        isDevAuthenticated = true;
        devAuthContainer.style.display = 'none';
        devContent.style.display = 'flex'; // Reveal the secret buttons!
    } else {
        // Wrong password!
        devAuthError.style.display = 'block';
        devPasscodeInput.value = '';
        devPasscodeInput.focus();
    }
}

// Check password if they hit 'Enter' while typing
devPasscodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkDevPasscode();
    }
});

// Close button on the Auth screen
devAuthCloseBtn.addEventListener('click', () => {
    devMenuOverlay.classList.remove('active');
});

devBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Find out which chapter this button is supposed to skip to
        const targetNode = e.target.getAttribute('data-node');

        if (targetNode === 'intro') currentScore = 0;
        if (targetNode === 'chap2') currentScore = 1.6;
        if (targetNode === 'chap3') currentScore = 3.2;
        if (targetNode === 'chap4') currentScore = 4.8;
        if (targetNode === 'chap5') currentScore = 6.4;
        if (targetNode === 'chap6') currentScore = 8.0; // Hits exactly 80%!
        if (targetNode === 'chap7') currentScore = 10.0; // Perfect score

        updateProgressBar();

        // Hide any menus that might be open
        pauseMenuOverlay.classList.remove('active');
        choicesOverlay.classList.remove('active');
        devMenuOverlay.classList.remove('active');

        // Jump straight to the selected chapter!
        preloadAndPlay(targetNode);
    });
});