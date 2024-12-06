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

// Scroll-to-Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Rodyti arba slėpti mygtuką pagal slinkimo poziciją
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Sklandžiai grįžti į puslapio pradžią paspaudus mygtuką
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
