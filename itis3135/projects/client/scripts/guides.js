let current = 0;
const guide = ["quick", "general", "comp", "lane", "jungle"];
const nextGuideButton = document.getElementById("next");
const previousGuideButton = document.getElementById("previous");

function updateSection() {
    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.style.display="none";
    });
    document.getElementById(guide[current]).style.display="block";
}

nextGuideButton.addEventListener("click", () => {
    current++;
    if (current > 4){
        current = 0;
    }
    updateSection(guide[current]);
});
previousGuideButton.addEventListener("click", () => {
    current--;
    if (current < 0){
        current = 4;
    }
    updateSection(guide[current]);
});

// Initial call to show the correct section when the page loads
updateSection();

// Listen for hash changes
window.addEventListener('hashchange', updateSection);