// Select all sections that we want to apply the fade effect
const sections = document.querySelectorAll('section');

// Function to add the fade-in effect
const fadeInSections = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the section has the 'no-fade' class
        if (!entry.target.classList.contains('no-fade') && entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing the section after it fades in
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(fadeInSections, {
    threshold: 0.3 // Trigger fade when 40% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});



/*
// Select all sections that we want to apply the fade effect
const sections = document.querySelectorAll('section');

// Function to add the fade-in effect
const fadeInSections = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing the section after it fades in
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(fadeInSections, {
    threshold: 0.4 // Trigger fade when 30% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
*/

