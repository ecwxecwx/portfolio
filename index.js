var navLinks = document.querySelectorAll(".nav-link"),
    aboutNavLink = navLinks[0],
    workNavLink = navLinks[1];

aboutNavLink.addEventListener("click", function() {
    console.log("about");
})

workNavLink.addEventListener("click", function() {
    console.log("work");
})

// when i click about,
// i want about content to show (add open class)
// and hide work content (remove open class)

// when i click work,
// i want work content to show (add open class)
// and hide about content (remove open class)


