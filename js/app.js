/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint

/**
 * Define Global Variables
 * 
*/
// to create a navigation having the required section, I will first give it a global variable. I will name it nav

const navLink = document.getElementById("navbar__list");

// find and return a list of all <section> elements within the document

const entireSections = document.querySelectorAll("section");
// The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match thespecified group of selectors
//Note:  NodeList being live means that if the children of the node change, the NodeList object is automatically updated.

// set up the nav
function navSetUp() {
    // loop through the entire sections
    for (let section of entireSections) {
        navName = section.getAttribute("data-nav");
        navDataLink = section.getAttribute("id");

        //create the nav-item for each
        navItem = document.createElement("li");

        //add the text from the HTML
        navItem.innerHTML = `<a class = "menu__link" href="#${navDataLink}">${navName}</a>`;
        
        //add listItem to the menu
        navLink.appendChild(navItem);
    };
    
};

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// In this section, I will create a function to observe the section with specificity to the section that is on the viewport and its link
//to carry out the above, I will create a loop using a forEach to lool over the sections

function sectionInViewPort (element) {
    let sectionPosition = element.getBoundingClientRect();
    return (sectionPosition.top >= 0);
}; //(Mike's Coding Tutorials, 2020)

// I will add active class to the section on the viewport
function toggleActiveClass() {
    for (section of entireSections) {
        //I will add active class to the section's link if the section is in the viewport
        if (sectionInViewPort(section)) {
            //a conditional is added to check if it already contain an active class
            if (!section.classList.contains("your-active-class")) {
                //Add the active class if it doesn't contain it yet
                section.classList.add("your-active-class");
                section.style.cssText = "background-color: lemon";
            };
        } else { // if it's out, the viewport then remove "your-active-class"
            section.classList.remove("your-active-class");
            //(Mike's Coding Tutorials, 2020)
        };
    };
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// call the function
navSetUp();
//add class 'active' to section when near top of view
 
// Scroll to anchor ID using scrollTO event
//call the function
document.addEventListener("scroll", toggleActiveClass);
// Add class 'active' to section when near top of viewport
//(Mike's Coding Tutorials, 2020)



/**
 * End Main Functions
 * Begin Events
 * 
*/



