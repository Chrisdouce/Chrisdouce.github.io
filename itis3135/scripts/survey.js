const courseSection = document.getElementById("course-section");
let courses = [{}];

function addCourse() {
    let courseNameLabel = document.createElement("label");
    courseNameLabel.textContent = `Course Name:`;

    let courseName = document.createElement("input");
    courseName.type = "text";
    courseName.setAttribute("required", "");

    let courseDescriptionLabel = document.createElement("label");
    courseDescriptionLabel.textContent = `Course Description:`;

    let courseDescription = document.createElement("textarea");
    courseDescription.type = "text";
    courseDescription.setAttribute("required", "");
    
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        courseSection.removeChild(courseName);
        courseSection.removeChild(courseNameLabel);
        courseSection.removeChild(courseDescription);
        courseSection.removeChild(courseDescriptionLabel);
        courseSection.removeChild(deleteButton);
        index--;
    };
    index++;
    courseSection.appendChild(courseNameLabel);
    courseSection.appendChild(courseName);
    courseSection.appendChild(courseDescriptionLabel);
    courseSection.appendChild(courseDescription);
    courseSection.appendChild(deleteButton);
}

document.getElementById("intro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    if (!document.getElementById("name-input").value || !document.getElementById("mascot-input").value || !document.getElementById("image").value || !document.getElementById("agree").checked) {
        alert("Please fill out all required fields and agree to the terms.");
        return;
    } else {
        let name = document.getElementById("name-input").value;
        let mascot = document.getElementById("mascot-input").value;
        let caption = document.getElementById("caption").value;
        let personalBackground = document.getElementById("personal-background").value;
        let professionalBackground = document.getElementById("professional-background").value;
        let academicBackground = document.getElementById("academic-background").value;
        let webDevelopment = document.getElementById("web-development").value;
        let platform = document.getElementById("platform").value;
        let funnyThing = document.getElementById("funny-thing").value;
        let anythingElse = document.getElementById("anything-else").value;
        let image = document.getElementById("image").files[0];
        let imageUrl = URL.createObjectURL(image);
        let courses = [];
        courseSection.querySelectorAll("input").forEach((element, index = 0) => {
            courses.push({});
            courses[index].name = element.value;
            index++;
        });
        courseSection.querySelectorAll("textarea").forEach((element, index = 0) => {
            courses[index].description = element.value;
            index++;
        });
        console.log(courses[0].name);

        let startString = `
            <h2>${name}'s Introduction Page | ${mascot}</h2>
            <img src="${imageUrl}" alt="${caption}">
            <figcaption>${caption}</figcaption>
            <ul>
                <li><b>Personal Background:</b> ${personalBackground}</li>
                <li><b>Professional Background:</b> ${professionalBackground}</li>
                <li><b>Academic Background:</b> ${academicBackground}</li>
                <li><b>Background in this Subject:</b> ${webDevelopment}</li>
                <li><b>Primary Computer Platform:</b> ${platform}</li>
                <li><b>Courses I'm Taking:</b>
                    <ol>` 
                    ;
        let courseString = ``;
        if (courses.length > 0){
            courses.forEach((course) => {
                if (course){
                    courseString += `<li><b>${course.name}</b>: ${course.description}</li>`;
                }
            });
        }
        let endString = `
        </ol>
                <li><b>Funny thing?</b> ${funnyThing}</li>
                <li><b>Anything Else?</b> ${anythingElse}</li>
                <li><b>I understand that this page is not password protected and will not put anything here that I don’t want publicly available. -<em>${name}</em></li>
            </ul>
            <button id="reset-page">Reset</button>`;
        document.querySelector('main').innerHTML = startString + courseString + endString;
        document.getElementById("reset-page").addEventListener("click", function() {
            location.reload(); // Reload the page to restore the form
        });
    }
});

document.getElementById("intro-form").addEventListener("reset", function() {
    alert("Form has been reset.");
});
