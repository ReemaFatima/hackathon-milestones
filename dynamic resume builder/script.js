/*const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    const name= (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone= (document.getElementById('phone') as HTMLInputElement).value
    const education= (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skills= (document.getElementById('skills') as HTMLInputElement).value


    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3> Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>`;



    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;

    }else {
        console.error('The resume display element is missing.');
    }
    



});*/
// Get references to the form and resume display
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Listen for the form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    // Capture input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('Skills').value;
    // Create dynamic resume content
    var resumeContent = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Inject the generated resume content into the resume display div
    resumeDisplay.innerHTML = resumeContent;
});
