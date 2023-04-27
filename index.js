var navLinks = document.querySelectorAll(".nav-link"),
    aboutNavLink = navLinks[0],
    workNavLink = navLinks[1],
    
    aboutContent = document.getElementById("about-content"),
    workContent = document.getElementById("work-content");

aboutNavLink.addEventListener("click", function() {
    // Toggling the display for about content
    aboutContent.style.display = (aboutContent.style.display === 'none') ? 'block' : 'none';
    
    // Once about toggling works for about, we toggle work content
    if (aboutContent.style.display === "none") {
        workContent.style.display = "block";
    } else {
        workContent.style.display = "none";
    }
})

workNavLink.addEventListener("click", function() {
    console.log("work");
})

// add a lil transition


