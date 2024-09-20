                                                                 
// Get references to the form and resume display
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Listen for the form submission
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Capture input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

    // Create dynamic resume content
    const resumeContent = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><strong> Name:</strong><span contenteditable="true" >${name}</span></p>
        <p><strong> Email:</strong><span contenteditable="true">${email}<span/></p>
        <p><strong> Phone:</strong><span contenteditable="true"> ${phone}</span></p>
        
        <h3>Education</h3>
        <p contenteditable="true"  >${education}</p>
        
        <h3>Experience</h3>
        <p contenteditable="true" >${experience}</p>
        
        <h3>Skills</h3>
        <p contenteditable= "true">${skills}</p>
    `;

    // Inject the generated resume content into the resume display div
    resumeDisplay.innerHTML = resumeContent;
});

