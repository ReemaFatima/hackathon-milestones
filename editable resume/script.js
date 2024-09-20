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
    var resumeContent = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong> Name:</strong><span contenteditable=\"true\" >".concat(name, "</span></p>\n        <p><strong> Email:</strong><span contenteditable=\"true\">").concat(email, "<span/></p>\n        <p><strong> Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\"  >").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p contenteditable=\"true\" >").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p contenteditable= \"true\">").concat(skills, "</p>\n    ");
    // Inject the generated resume content into the resume display div
    resumeDisplay.innerHTML = resumeContent;
});
