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
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById("navbar__list"); //unordered list
const sections = document.querySelectorAll("section"); //selects all section in html files
/**
 * End Global Variables
 * Start Helper Functions
 * 


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar (){
    for(let section of sections){
        
        const newElement = document.createElement('li'); //add list items
        newElement.className = "menu__link"; //with class name menu__link for existing CSS styling

        const link = document.createElement('a'); //anchor element created to create links
        link.href = `#${section.id}`; //link
        link.id = 'linkText'; //id used to remove text decoration
        link.innerHTML = section.dataset.nav; //add inner text

        newElement.appendChild(link); // append the anchor to list item
        navbarList.appendChild(newElement); //append list item to unordered list

    }
}

// Add class 'active' to section when near top of viewport
function sectionActive(){
    for(const section of sections){
       
        const viewportSect = section.getBoundingClientRect(); //gets DOMRect object that contains section
        
        if(viewportSect.top >= 0 && viewportSect.bottom <= (document.documentElement.clientHeight)){ // check to see if the element is within viewport
            section.classList.add('your-active-class'); //add active class
        }else{
            section.classList.remove('your-active-class'); //remove active class
        }

    }
}



// Scroll to anchor ID using scrollTO event
function scrollLink(event){
    event.preventDefault(); //prevent default behavior
    let clickText = event.target.getAttribute('href'); //get href from event target
    
    scrollTo({
        top: document.querySelector(clickText).offsetTop - navbarList.clientHeight, //define top position of scroll as top of the element - the nav bar
        behavior: 'smooth'
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

// Scroll to section on link click
document.addEventListener("click", scrollLink);

// Set sections as active
document.addEventListener("scroll", sectionActive);

