function updateSection() {
    const sectionPath = window.location.hash;
    
    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.style.display="none";
    });

    // Show the selected section
    if (sectionPath === "") {
        document.getElementById("login").style.display="block";
    } else {
        document.getElementById(sectionPath.slice(1)).style.display="block";
    }
}

// Initial call to show the correct section when the page loads
updateSection();

// Listen for hash changes
window.addEventListener('hashchange', updateSection);