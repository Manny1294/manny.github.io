"strict mode";
// selecting the "hamburger" by the ID and assigning it to a variable hamburger
const hamburger = document.getElementById("hamburger");
// selecting the "nav-menu" by the class and assigning it to a variable navMenu
const navMenu = document.querySelector(".nav-menu");
// selecting the "body" by the element and assigning it to a variable body
const body = document.querySelector("body");

function handleAnimationEnd() {
  // This code runs once the animation ends
  console.log("Animation ended");

  // Remove classes that were added for the open menu state

  navMenu.classList.remove("menu-visible");
  navMenu.classList.remove("slide-out");
  hamburger.classList.remove("open");
  body.classList.remove("prevent-scroll");

  // Remove the event listener to prevent memory leaks
  navMenu.removeEventListener("animationend", handleAnimationEnd); // i no longer need to listen for the event
}

// adding an eventlistener to the hamburber variable to listen for clicks
hamburger.addEventListener("click", () => {
  // // checking if the 'menu-visible' class is present or absent in the classList of the navMenu Element. if absent, add it. else remove it
  // navMenu.classList.toggle("menu-visible");
  // // to check if the 'prevent-scroll' class is present or absent in the classList of the body Elemnet. if present, remove it. else add it
  // body.classList.toggle("prevent-scroll");
  // // to check the classlist of the hamburger Element if the "open" class is present or absent. if present, remove it. Else add it
  // hamburger.classList.toggle("open");
  // // to check the classlist of the navMenu Element if the "slide-in" class is present or absent. if present, remove it. Else add it
  // navMenu.classList.toggle("slide-in"); ///// this might be a problem
  // // retrieving the classes that is contained inside navMenu Element and assigning these classes to a variable called navMenuClassList.(classlist is  a list of classes the navmenu element contains)
  // const navMenuClassList = navMenu.classList;
  // // to check the classlist of the navMenu Element contains the "slide-in" class., if it does it returns the value 'true' and stores it in the variable "isOpen"
  // const isOpen = navMenuClassList.contains("slide-in");
  // console.log(isOpen);
  // // if isOpen is true, remove "slide-in" class and add "slide-out" class
  // if (isOpen) {
  //   // navMenu.classList.remove("slide-in");
  //   navMenu.classList.remove("slide-out");
  // } else {
  //   //  If isOpen is false, remove "slide-out" and add "slide-in"
  //   // navMenu.classList.add("slide-in");
  //   navMenu.classList.add("slide-out");
  // }

  // retrieving the classes that is contained inside navMenu Element and assigning these classes to a variable called navMenuClassList.(classlist is  a list of classes the navmenu element contains)
  const navMenuClassList = navMenu.classList;
  // to check the classlist of the navMenu Element contains the "menu-visible class., the value is false. i.e it does not contain the "menu-visible" class
  const isOpen = navMenuClassList.contains("menu-visible");
  // console.log(isOpen); // false
  //  the class menu-visible is not present in the navMenu element.
  if (!isOpen) {
    // this adds the OPEN class to the list of other classes for the element and it transforms the hamburger into an X.
    hamburger.classList.add("open");
    // the SLIDE-IN class is added to the navMenu element and it triggers the animation to slide in.
    navMenu.classList.add("slide-in");
    // the menu-visible class is added to the element and and that makes the menu visble.
    navMenuClassList.add("menu-visible");
    // the prevent-scroll class is added to the element and prevents the whole body from scrolling
    body.classList.add("prevent-scroll");

    // when isOpen is true, ( that means it contains the navMenu class)
  } else {
    // the SLIDE-IN class is removed from the navMenu element.
    navMenu.classList.remove("slide-in");
    // the SLIDE-OUT class is added to the navMenu element and it triggers the animation to slide out.
    navMenu.classList.add("slide-out");
    // the callback function will run when the animationend is triggered. so it performs the actions specified in the function.
    navMenu.addEventListener("animationend", handleAnimationEnd);
  }
});

const priceChange = document.querySelectorAll(".plan-price");
priceChange[0].textContent = "$40";
priceChange[1].textContent = "$75";
priceChange[2].textContent = "$100";

const testimonial = document.querySelectorAll(".word");
testimonial[0].textContent =
  "Nice work! The implementation was smooth, and the integration with Web3 elements was seamless. Looking forward to more builds together.";
testimonial[1].textContent =
  "Great job bringing the designs to life! Your attention to detail and smooth transitions really enhance the user experience. Looking forward to more seamless collaborations.";

// const nameChange = document.querySelectorAll(".star-part");
// nameChange[0].textContent = "James";
// nameChange[1].textContent = "Mirabel";

const job = document.querySelector(".job");
job.textContent = "NFT Specialist";

const newBio = document.querySelectorAll(".bio");
newBio[0].textContent =
  "A junior web developer eager to grow my skills in front-end and back-end development. With experience in HTML, CSS and JavaScript, I’m focused on building responsive, efficient websites.";
newBio[1].textContent =
  "I have expertise in both front-end and back-end development, with strong skills in JavaScript, React, Node.js, and databases like MongoDB and MySQL. I deliver scalable, end-to-end web applications and focus on writing clean, maintainable code. My goal is to ensure seamless, user-friendly experiences across all devices.";

const newOccupation = document.querySelector(".occupation");
newOccupation.textContent = "Software Engineer";
