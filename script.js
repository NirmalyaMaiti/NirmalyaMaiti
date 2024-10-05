// script.js

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle navigation menu on mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add event listeners to each navigation link
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove 'active' class from all sections
        document.querySelectorAll('section').forEach(function(section) {
            section.classList.remove('active');
        });

        // Add 'active' class to the corresponding section
        var targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.classList.add('active');

        // Scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close the mobile menu after clicking
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});



