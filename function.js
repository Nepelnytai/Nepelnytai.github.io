// Select the button and body elements
const button = document.getElementById('darkmode-button');
const body = document.body;

// Update the button text and icon
const updateButtonText = () => {
    const modeText = document.getElementById('mode-text');
    const modeIcon = document.getElementById('mode-icon');
    const isDarkMode = body.classList.contains('dark-mode');

    modeText.textContent = isDarkMode ? 'Šviesus Režimas' : 'Tamsus Režimas';
    modeIcon.textContent = isDarkMode ? '☀️' : '🌙';
};

// Toggle dark mode
button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateButtonText();
});

// Initialize the button text and icon
updateButtonText();
