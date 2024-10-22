//Date
const date = new Date();
const dateElement = document.getElementById("current-date");
const currentTime = date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
const currentDate = date.toLocaleDateString("en-US", {weekday: "long", year: "numeric", month: "long", day: "numeric"});
dateElement.innerHTML = `Today is ${currentTime} on ${currentDate}`;

//User welcome
function userWelcome(){
    let userName = document.getElementById("user-name").value;
    let userEmote = document.getElementById("user-emote").value;
    const welcomeElement = document.getElementById("welcome-message");
    if (userName === "" || userEmote ===""){
        return;
    }
    welcomeElement.innerHTML = `The Dingo CD Company welcomes you, ${userName}! We're glad you are doing ${userEmote}`;
}

//Favorite Number convertor
function numberConvertor(){
    const polygon = [
        "Monogon", "Digon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", 
        "Heptagon", "Octagon", "Nonagon", "Decagon", "Undecagon", "Dodecagon"
    ];
    const userNumberElement = document.getElementById("user-number");
    const favoriteNumber = Math.abs(Math.round(userNumberElement.value));
    const shapeElement = document.getElementById("shape");
    if (favoriteNumber > 0 && favoriteNumber <= 10) {
        alert(`This number matches with the ${polygon[favoriteNumber-1]}!`);
        shapeElement.innerHTML = `This number matches with the ${polygon[favoriteNumber-1]}!`;
    }
}

//Random fact generator 
function factGenerator(){
    const facts = [
        "While similar to dogs, they aren't domesticated", "Native to Australia", "They hunt in packs", "They can live in deserts or forest", "They can live independently of a pack"
    ];
    const factElement = document.getElementById("fact");
    factElement.textContent = facts[Math.floor(Math.random()*facts.length)];
}

//Dingo Role
//const factElement = document.getElementById("meal");
function getRole(){
    const selectedMood = document.querySelector('input[name="role"]:checked');
    const roleElement = document.getElementById("role");
    if (roleElement) {
        if (selectedMood.value === "alone"){
            roleElement.innerHTML = `You aren't in the pack`;
        } else {
            roleElement.innerHTML = `Your role in the pack is <strong>${selectedMood.value}</strong>`;
        }
    } else {
        alert("Please select your role!");
    }
}

//Rent Calculator
function rentCalculator(){
    const priceElement = document.getElementById("cd-price");
    const rentTimeElement = document.getElementById('rent-time');
    const totalElement = document.getElementById("total-rent");
    if (rentTimeElement) {
        if (isNaN(priceElement.value*rentTimeElement.value)){
            totalElement.innerHTML = `Please enter a numerical value for the price`;
        } else {
            totalElement.innerHTML = `After <strong>${rentTimeElement.value} ${rentTimeElement.value>1 ? "Months" : "Month"}</strong>, the price will be <strong>$${priceElement.value * rentTimeElement.value}</strong>`;
        } 
    }
}

//Inventory Distributor
function inventoryRatioCalculator(){
    const spaceElement = document.getElementById("space");
    const totalRatio = document.getElementById("total-ratio");
    const totalSpace = parseFloat(spaceElement.value);
    let rom, music, podcast, movie;
    if (!isNaN(totalSpace)){
        rom = Math.floor(totalSpace * .2);
        music = Math.floor(totalSpace * .4);
        podcast = Math.floor(totalSpace * .1);
        movie = Math.floor(totalSpace * .3);
        let remainingSpace = totalSpace - (rom + music + podcast + movie);
        if (remainingSpace){
            let priority = [music, movie, rom, podcast];
            let index = 0;
            while (remainingSpace > 0){
                priority[index]++;
                remainingSpace--;

                index++;
                if (index > 3){
                    index = 0;
                }
            }
            music = priority[0];
            movie = priority[1];
            rom = priority[2];
            podcast = priority[3];
        }

        totalRatio.innerHTML = 
        `<strong>Here's how the inventory should look:</strong> 
        <p>${music} ${music > 1 ? "Music CDs" : "Music CD"}</p> 
        <p>${movie} ${movie > 1 ? "Movie CDs" : "Movie CD"}</p> 
        <p>${rom} ${rom>1 ? "ROM CDs" : "ROM CD"}</p> 
        <p>${podcast} ${podcast>1 ? "Podcast CDs" : "Podcast CD"}</p>`;
    }
}