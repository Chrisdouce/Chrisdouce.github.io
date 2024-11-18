let fullName = "ChristopherDoucette".toLowerCase();
let nameElement = document.getElementById("name");
let letterMap = new Map([
    ["c", ["./images/gallery/castle.jpg", "./images/gallery/chair.jpg"]],
    ["d", ["./images/gallery/door.jpg"]],
    ["e", ["./images/gallery/eagle.jpg", "./images/gallery/elephant.jpg", "./images/gallery/epcot.jpg"]],
    ["h", ["./images/gallery/horse.jpg", "./images/gallery/house.jpg"]],
    ["i", ["./images/gallery/ice-cream.jpg"]],
    ["o", ["./images/gallery/ocean.jpg", "./images/gallery/ostrich.jpg"]],
    ["p", ["./images/gallery/pool.jpg"]],
    ["r", ["./images/gallery/rain.jpg", "./images/gallery/rose.jpg"]],
    ["s", ["./images/gallery/shark.jpg"]],
    ["t", ["./images/gallery/tree.jpg", "./images/gallery/truck.jpg", "./images/gallery/towel.jpg"]],
    ["u", ["./images/gallery/umbrella.jpg"]]
]);
let slideshow = document.getElementById("slideshow");
let slides = document.getElementsByClassName("mySlides");

let slideIndex = 0;
function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";

    //Break name
    if (n > 10){
        n++;
    }
    const before = nameElement.textContent.substring(0, n);
    const charToHighlight = nameElement.textContent.charAt(n);
    const after = nameElement.textContent.substring(n + 1);

    // Use a non-breaking space
    const safeChar = charToHighlight === " " ? "&nbsp;" : charToHighlight;

    // Update the HTML with the highlighted character
    nameElement.innerHTML = `${before}<span style="color:red;">${safeChar}</span>${after}`;
    
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < fullName.length; i++) {
        let nameChar = fullName.charAt(i);
        if (letterMap.has(nameChar)) {
            let images = letterMap.get(nameChar);
            newFigure = document.createElement("figure");
            newFigure.className="mySlides";

            //Image
            if (images.length > 0) {
                imageElement = document.createElement("img");
                imageElement.src = images[0];
                imageNameIndex = images[0].lastIndexOf("/");
                imageElement.alt = `Image of ${images[0].substring(imageNameIndex + 1)}`;
                newFigure.appendChild(imageElement);
                
                //Caption
                captionElement = document.createElement("figcaption");
                let captionContent = images[0].substring(imageNameIndex + 1, images[0].lastIndexOf("."));
                captionContent = captionContent.charAt(0).toUpperCase() + captionContent.substring(1);
                captionElement.textContent = captionContent;
                newFigure.appendChild(captionElement);
                
                //Current number
                currentCaptionElement = document.createElement("figcaption");
                currentCaptionElement.className = "numbertext";
                currentCaptionElement.textContent = `${i+1} / ${fullName.length}`;
                newFigure.appendChild(currentCaptionElement);

                slideshow.appendChild(newFigure);

                //Thumbnail
                let rowElement = document.getElementById("row");

                let columnElement = document.createElement("div");
                columnElement.className = "column";

                let thumbnailImage = document.createElement("img");
                thumbnailImage.className = "demo cursor";
                thumbnailImage.src = images[0];
                thumbnailImage.addEventListener('click', () => currentSlide(i));
                thumbnailImage.alt = `Image of ${images[0].substring(imageNameIndex + 1)}`;

                columnElement.appendChild(thumbnailImage);
                rowElement.appendChild(columnElement);


                //Next image in map
                let newImageArray = letterMap.get(nameChar);
                newImageArray.shift();
                letterMap.set(nameChar, newImageArray);
            }
        }
    }
    showSlides(0);
});


// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length-1) {
        slideIndex = 0;
    }

    if (slideIndex < 0){
        slideIndex = slides.length-1;
    }
    showSlides(slideIndex);
}