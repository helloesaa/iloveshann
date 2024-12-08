const nameForm = document.getElementById('nameForm');
const inputContainer = document.getElementById('inputContainer');
const noteContainer = document.getElementById('noteContainer');
const reasonsContainer = document.getElementById('reasonsContainer');
const errorMessage = document.getElementById('errorMessage');
const userNameElement = document.getElementById('userName');
const stickyNotesContainer = document.getElementById('stickyNotesContainer');
const reasonsList = document.getElementById('reasonsList');
const backButton = document.getElementById('backButton');
const reasonsButton = document.getElementById('reasonsButton');
const backFromReasonsButton = document.getElementById('backFromReasonsButton');

const stickyNotes = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "1", "2", "3", "5", "6", "7"
];

const reasons = [
    "Because I love you",
    "Because you are the safest place in the world for me",
    "I love the way you laugh—it's my favorite sound",
    "You always know how to make me feel better",
    "Because you are an amazing listener",
    "You make me want to be the best version of myself",
    "Because you are patient with my sometimes annoying nature",
    "You always care",
    "You have a unique way of showing me your love",
    "Because every time we're together, I feel like the world is more beautiful",
    "I love you because you make me believe in love",
    "Because you always respect me as your partner",
    "You have a sense of humor that makes me laugh until I lose track of time",
    "Because you always make me smile",
    "I love the way you talk to me",
    "Because you are the perfect combination as my lover",
    "I love you because of who you are",
    "You know what I need even before I realize it",
    "Because you always know how to make me feel special",
    "You are the first person I want to share both good and bad news with",
    "I love you because you make home feel like home",
    "Because you give me a sense of peace that I've never felt before",
    "You are the most beautiful part of my life",
    "Because you always appreciate the little things I do for you",
    "Because you don't just love me, you also respect and understand me",
    "I love you because you make me feel like I am enough",
    "Because you have a unique way of cheering me up",
    "Because you pay attention to the little details about me",
    "I love you because you always notice me",
    "Because you have an infectious zest for life",
    "You respect my personal space and time",
    "I love you because you trust me completely",
    "Because you know when to be serious and when to joke around",
    "I love the way you touch my life with simple but meaningful things",
    "Because you are my motivation every morning to face the day",
    "You know how to make me feel safe",
    "I love you because you are my biggest supporter",
    "Because you're never afraid to show your soft side",
    "You appreciate every effort I make for us",
    "Because you make me feel lucky every day",
    "I love you because you are my best partner",
    "Because you bring laughter in the most unexpected moments",
    "You never let me feel alone",
    "I love you because you make ordinary things feel extraordinary",
    "Because you are the one I trust the most",
    "You're not afraid to show your love and affection",
    "Because you always remind me to love myself",
    "I love you because you are my home",
    "Because you have a unique way of making me feel special",
    "I love the way you always try your best for our relationship",
    "Because you are someone I'm proud of",
    "I love you because you've taught me many new things",
    "Because you always support my tough decisions",
    "I love the way you understand my emotions without me having to explain everything",
    "Because you are the reason I smile every day",
    "You make me feel that love is easy",
    "I love you because I know you're always by my side",
    "Because you always prioritize us, not just yourself",
    "I love you because we complement each other",
    "Because you always fight for our relationship",
    "I love the way you bring warmth to my heart",
    "Because you are the most beautiful gift in my life",
    "I love you because you always believe in my potential",
    "Because you are the reflection of everything I want in a partner",
    "I love the way you maintain communication with me",
    "Because you are someone I want to protect and cherish forever",
    "I love you because you are part of my dream come true",
    "Because you never make me feel small",
    "I love you because you always show the best version of yourself",
    "Because you know how to make this relationship colorful",
    "I love the way you bring peace to my mind",
    "Because you always try to listen to my point of view",
    "I love you because you are the complement of my life",
    "Because you are an inspiration in every step I take",
    "I love the way you always remind me to be grateful",
    "Because you make me believe that I deserve to be loved",
    "I love you because you bring true happiness into my life",
    "Because you always know how to fix my bad days",
    "I love the way you taught me the meaning of patience",
    "Because you make me feel special among many people",
    "I love you because you are the most important part of my life",
    "Because you are the best friend I've ever had",
    "I love you because you are my home",
    "Because you are the star that lights up my night",
    "I love the way you always make sure I feel comfortable",
    "Because you make me want to be a better person every day",
    "I love you because you are the answer to my prayers",
    "Because you never stop loving me, even though I'm not perfect",
    "I love the way you cherish every little moment we have together",
    "Because you are someone I never want to lose",
    "I love you because you give me strength when I feel weak",
    "Because you love me unconditionally and sincerely",
    "I love the way you bring happiness in all the little things you do",
    "Because I can't imagine my future without you in it",
    "I love you because you are you—and that's more than enough for me",
    "Because you always make me feel valued",
    "I love you because you are the place I turn to for strength in my weak moments",
    "Because you always know how to make me feel better, even on my worst days",
    "Because you always make me feel understood",
    "Because you are the person I can always count on",
    "Because you have an incredible way of making everything better",
];

function switchContainer(hide, show) {
    if (hide) hide.style.display = 'none';
    if (show) show.style.display = 'block';
}

nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim().toLowerCase();

    if (name !== 'shannon') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Sorry, only my girlfriend can proceed.';
        return;
    }

    errorMessage.style.display = 'none';
    userNameElement.textContent = 'Shannon';
    loadStickyNotes();
    switchContainer(inputContainer, noteContainer);
});

function loadStickyNotes() {
    stickyNotesContainer.innerHTML = '';
    
    // Remove duplicates using Set
    const uniqueStickyNotes = [...new Set(stickyNotes)];

    uniqueStickyNotes.forEach((note, index) => {
        const div = document.createElement('div');
        div.className = `sticky-note note${(index % 6) + 1}`;
        div.textContent = note;
        stickyNotesContainer.appendChild(div);
    });
}

reasonsButton.addEventListener('click', () => {
    loadReasons();
    switchContainer(noteContainer, reasonsContainer);
});

function loadReasons() {
    reasonsList.innerHTML = '';
    reasons.forEach((reason) => {
        const li = document.createElement('li');
        li.textContent = reason;
        reasonsList.appendChild(li);
    });
}

backButton.addEventListener('click', () => {
    switchContainer(noteContainer, inputContainer);
});

backFromReasonsButton.addEventListener('click', () => {
    switchContainer(reasonsContainer, noteContainer);
});

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
