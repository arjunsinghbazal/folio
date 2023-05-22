function toggleSkillsHeading() {
  var skillsHeading = document.getElementById('skills-heading');
  var currentText = skillsHeading.innerText;
  var newText = (currentText === 'Frontend Developer') ? 'Programmer' : 'Frontend Developer';
  skillsHeading.innerText = newText;
}

// Set the interval to toggle the heading text every 2 seconds
setInterval(toggleSkillsHeading, 1500);

function toggleContactForm() {
  var contactFormContainer = document.getElementById("contact-form-container");
  var container = document.querySelector(".container");

  if (contactFormContainer.style.display === "none") {
    contactFormContainer.style.display = "block";
    container.style.display = "none";
  } else {
    if (nameInput === "" && emailInput === "" && messageInput === "") {
      contactFormContainer.style.display = "none";
      container.style.display = "block";
    }
  }
}

function backit() {
  var contactFormContainer = document.getElementById("contact-form-container");
  var container = document.querySelector(".container");

  contactFormContainer.style.display = "none";
  container.style.display = "block";
}