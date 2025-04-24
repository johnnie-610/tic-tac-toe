"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const footerHML = `
    <p>&copy; <span id="year"></span> JG. All rights reserved.</p>
    <p>Created with <span class="heart">❤</span> by <a href="https://github.com/Johnnie" target="_blank" rel="noopener noreferrer">Johnnie</a></p>
    `;
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = footerHML;
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const submitButton = document.getElementById("submit");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const form = document.getElementById("contact-form");

    submitButton.disabled = true;
    
    function checkFormCompletion() {
        if (nameInput.value && emailInput.value && subjectInput.value && messageInput.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    nameInput.addEventListener("input", checkFormCompletion);
    emailInput.addEventListener("input", checkFormCompletion);
    subjectInput.addEventListener("input", checkFormCompletion);
    messageInput.addEventListener("input", checkFormCompletion);
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        window.alert("Form submitted successfully!");
        form.reset();
        submitButton.disabled = true;
    });

});
