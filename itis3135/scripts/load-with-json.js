// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Fetch JSON data
    fetch("./scripts/json/header.json")
        .then((response) => response.json())
        .then((data) => {
            
            const menuContainer = document.getElementById("menu-header");
            const navContainer = document.createElement("nav");
            const listContainer = document.createElement("ul");
            const heading = document.createElement("h1");
            heading.textContent = "Christopher Doucette | ITIS 3135";

            menuContainer.appendChild(heading);

            // Process JSON data
            data.forEach((item, index) => {
                // Create menu item link element
                const menuListItem = document.createElement("li");
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                // Append menu item to the container
                menuContainer.appendChild(menuItem);
                menuListItem.appendChild(menuItem);
                listContainer.appendChild(menuListItem);
                
                if (index < (data.length - 1)){
                    const menuDivider = document.createElement("li");
                    menuDivider.textContent = "|";
                    listContainer.appendChild(menuDivider);
                }
                index++;
            });
            navContainer.appendChild(listContainer);
            menuContainer.appendChild(navContainer);
        })
        .catch((error) => console.error("Error fetching menu:", error));
    fetch("./scripts/json/footer.json")
        .then((response) => response.json())
        .then((data) => {
            const menuContainer = document.getElementById("menu-footer");
            const navContainer = document.createElement("nav");
            const listContainer = document.createElement("ul");

            // Process JSON data
            data.forEach((item, index) => {
                // Create menu item link element
                const menuListItem = document.createElement("li");
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;

                // Append menu item to the container
                menuContainer.appendChild(menuItem);
                menuListItem.appendChild(menuItem);
                listContainer.appendChild(menuListItem);
                
                if (index < (data.length - 1)){
                    const menuDivider = document.createElement("li");
                    menuDivider.textContent = "|";
                    listContainer.appendChild(menuDivider);
                }
                index++;
            });
            navContainer.appendChild(listContainer);
            menuContainer.appendChild(navContainer);

            //Designed by stuff
            menuContainer.innerHTML += `
            <p>Website made by <a id="dynamic" href="#">CDevDesigns &copy;2024</a>, <em>Certified in <a href="https://www.freecodecamp.org/certification/cdoucett/responsive-web-design" target="_new">Responsive Web Design</a></em>, <em>Certified in <a href="https://www.freecodecamp.org/certification/cdoucett/javascript-algorithms-and-data-structures-v8" target="_new">JS</a></em>.</p>
            <button onclick="validateHTML()">Validate HTML</button>
            <button onclick="validateCSS()">Validate CSS</button>
            <button onclick="validateAIM()">Validate AIM</button>
            `
        
            //Buttons

        }).catch((error) => console.error("Error fetching menu:", error));
});

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
}