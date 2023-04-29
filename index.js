var navLinks = document.querySelectorAll(".nav-link"),
    
    aboutContent = document.getElementById("about-content"),
    workContent = document.getElementById("work-content");

// Add click listener to each navlink
for (let i = 0; i < navLinks.length; i++) {
    // For the navlink that is clicked,
    navLinks[i].addEventListener("click", function() {
        // Add flex-grow to the parent of clicked nav link
        this.parentElement.style.flexGrow = "1";

        // Converting navLink nodeList to array
        let navLinkList = Array.from(navLinks);
        // console.log(navLinkList);

        // Removing selected(i) from linkList,
        // what's left is the unselected link in navLinkList
        navLinkList.splice(i, 1);

        let unselectedNavLink = navLinkList[0];
        
        // Apply flex-grow 0 to that unselected navlink's parent
        unselectedNavLink.parentElement.style.flexGrow = "0";
    })
}










// aboutNavLink.addEventListener("click", function() {
//     // Toggling flex grow to accordion list
//     this.parentElement.style.flexGrow = "1";
//     console.log('this.parentElement.style.flexGrow :>> ', this.parentElement.style.flexGrow);
// })

// workNavLink.addEventListener("click", function() {
//     console.log(this);
// })


// <---- Structure ---->
// body (flex)
//  accordion (flex)
//      accordion__list (flex + flex grow)
//          nav-link
//          accordion__content (flex + flex grow)


// <---- Toggling Nav ---->
// aboutNavLink.addEventListener("click", function() {
//     // Toggling the display for about content
//     aboutContent.style.display = (aboutContent.style.display === 'none') ? 'block' : 'none';
    
//     // Once about toggling works for about, we toggle work content
//     if (aboutContent.style.display === "none") {
//         workContent.style.display = "block";
//     } else {
//         workContent.style.display = "none";
//     }
// })

// add a lil transition


