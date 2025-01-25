// Placeholder for future interactivity
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});
// Script for responsive menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
	
	
	
    // Optional: Close menu on clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sidebar toggle functionality
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.createElement('button');
toggleButton.classList.add('toggle-sidebar');
toggleButton.textContent = '☰';
document.body.appendChild(toggleButton);

// Toggle the sidebar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close the sidebar when a link is clicked (for better UX on smaller screens)
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('mousemove', (event) => {
    const circle = document.querySelector('.circle');
    const square = document.querySelector('.square');
    const triangle = document.querySelector('.triangle');

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.transform = `translate(${mouseX * 0.1}px, ${mouseY * 0.1}px)`;
    square.style.transform = `translate(${mouseX * -0.1}px, ${mouseY * -0.1}px)`;
    triangle.style.transform = `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px)`;
});



/* script.js */

// Select all eyes and their pupils
const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Loop through each eye
    eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil');

        // Get the eye's position
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        // Calculate the angle between the mouse and the eye
        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);

        // Move the pupil within the eye's boundaries
        const pupilOffset = 10; // Maximum distance the pupil can move
        const pupilX = Math.cos(angle) * pupilOffset;
        const pupilY = Math.sin(angle) * pupilOffset;

        // Apply the transformation to the pupil
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
