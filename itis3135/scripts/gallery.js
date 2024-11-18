let fullName = "Christopher Doucette".toLowerCase();
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

let slideIndex = 1;
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < fullName.length; i++) {
        let nameChar = fullName.charAt(i);
        if (letterMap.has(nameChar)) {
            let images = letterMap.get(nameChar);
            newFigure = document.createElement("figure");
            newFigure.className="mySlides";
            
            //Letter
            letterHeading = document.createElement("h3");
            letterHeading.textContent = nameChar;
            newFigure.appendChild(letterHeading);

            //Image
            if (images.length > 0) {
                imageElement = document.createElement("img");
                imageElement.src = images[0];
                console.log(images[0]);
                imageNameIndex = images[0].lastIndexOf("/");
                imageElement.alt = `Image of ${images[0].substring(imageNameIndex + 1)}`;
                newFigure.appendChild(imageElement);
                images.pop();
            }
            
            //Current number
            captionElement = document.createElement("figcaption");
            captionElement.className = "numbertext";
            captionElement.textContent = `${i} / ${fullName.length}`;

            slideshow.appendChild(newFigure);

            //Thumbnail
            /*
            <div class="row">
                <div class="column">
                    <img class="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
                </div>
            </div>
            */

        }
    }
    showSlides(slideIndex);
});


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}