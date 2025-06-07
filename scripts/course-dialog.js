function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal"> &times; </button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>
    
    `;
    courseDetails.showModal();
    closeModal.addEVentListener( "click", () => {
        courseDetails.close();  
    });
}

courseDiv.addEventListener("cliclk", () => {
    displayCourseDetails(course);   
});