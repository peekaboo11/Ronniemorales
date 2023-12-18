document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var options = {
        strings: ["Welcome to my Portfolio.", "Hi! I'm Ronnie", "BSIT Student","Future Programmer.", "Web Developer", "Software Engineer",],
        typeSpeed: 50, 
        backSpeed: 25, 
        loop: true, 
        showCursor: false 
    };

    var typed = new Typed('#homeMessage', options);
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var options = {
        strings: ["My projects are coming soon.", "I'll upload once i finish solo projects.", "Stay tuned."],
        typeSpeed: 50, 
        backSpeed: 25, 
        loop: true, 
        showCursor: false 
    };

    var typed = new Typed('#ProjectMessage', options);
});