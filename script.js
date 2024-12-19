// script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation
const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageTextarea = form.querySelector('textarea[name="msg"]');
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    // Validate Email
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate Message
    if (messageTextarea.value.trim() === '') {
        alert('Please enter your message.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Portfolio Links: Open in a New Tab
document.querySelectorAll('.gallery a').forEach(link => {
    link.setAttribute('target', '_blank');
});

// Dynamic Year in Footer (if applicable)
const footerYear = document.querySelector('.footer-year'); // Add this span in your footer
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}
