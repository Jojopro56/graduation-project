// --- 1. THE STORY MANIFEST ---
const storyManifest = {
    "intro": {
        folder: "videos/1/", 
        question: "Where should Mikey throw the detergent bin?", 
        choices: [
            { text: "Look for Another Bin", valueChange: 1, nextNode: "1g" },
            { text: "Throw in Trash can", valueChange: -2, nextNode: "1b" }
        ]
    },
    "1g": {
        folder: "videos/1/1g/",
        choices: []
    },
    "1b": {
        folder: "videos/1/1b/",
        choices: []
    }
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
const MAX_SCORE = 6; 

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
        // We have a save file! Hide the start button and show the Resume menu.
        startBtn.style.display = 'none';
        resumeOverlay.style.display = 'flex';
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

// Replace your Start Button listener with this:
startBtn.addEventListener('click', () => {
    console.log("1. Start button clicked!");
    startBtn.style.display = 'none';
    progressContainer.style.display = 'block';
    subtitleBtn.style.display = 'block'; 
    hamburgerBtn.style.display = 'block'; 
    console.log("2. UI elements revealed!");
    
    updateProgressBar();
    playNode("intro"); 
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
    subtitleBtn.style.display = 'block';
    hamburgerBtn.style.display = 'block'; // NEW: Show hamburger

    // Jump straight into the exact video where they left off
    playCurrentSequenceVideo(); 
});

// Restart button: Wipe the save and show the start button
resumeNo.addEventListener('click', () => {
    clearProgress();
    resumeOverlay.style.display = 'none';
    startBtn.style.display = 'block';
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
    
    if (nodeData.choices && nodeData.choices.length > 0) {
        showChoices(nodeData.choices, nodeData.question);
    } else {
        console.log("Story complete! Final Score:", currentScore);
        clearProgress(); // Wipe the save so they can restart later
        
        // --- END SCREEN TOGGLE ---
        // To disable the end screen for testing, just add // in front of the line below:
        showEndScreen(); 
    }
}

// A helper function to cleanly reveal the end screen and hide the UI
function showEndScreen() {
    // Hide the other UI elements for a clean cinematic ending
    hamburgerBtn.style.display = 'none';
    subtitleBtn.style.display = 'none';
    progressContainer.style.display = 'none';
    
    // Reveal the end screen
    endOverlay.classList.add('active');
}

function showChoices(choicesArray, questionText) {
    choicesOverlay.innerHTML = ''; 

    // 1. Create and add the title if a question exists for this node
    if (questionText) {
        const titleElement = document.createElement('h2');
        titleElement.id = 'choice-title';
        titleElement.innerText = questionText;
        choicesOverlay.appendChild(titleElement);
    }

    // 2. Create a container specifically for the buttons to keep them side-by-side
    const btnContainer = document.createElement('div');
    btnContainer.id = 'choice-buttons-container';

    // 3. Generate the buttons and put them inside the button container
    choicesArray.forEach(choice => {
        const btn = document.createElement('button');
        btn.classList.add('choice-btn');
        btn.innerText = choice.text;

        btn.addEventListener('click', () => {
            currentScore += choice.valueChange;
            updateProgressBar();
            playNode(choice.nextNode);
        });

        btnContainer.appendChild(btn);
    });

    // 4. Add the button container to the overlay and reveal it
    choicesOverlay.appendChild(btnContainer);
    choicesOverlay.classList.add('active');
}

// INITIALIZE: Run this immediately to see what UI to display
checkSaveData();

// --- KEYBOARD CONTROLS ---

document.addEventListener('keydown', (event) => {
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