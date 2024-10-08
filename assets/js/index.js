/* main nav */
function getDivHeight() {
    const div = document.getElementById('sidebar');
    const height = window.innerHeight; // Get the width of the div
  console.log("height",height);
  
    // Set the width as a CSS variable
    document.documentElement.style.setProperty('--my-div-height', `${height}px`);
  }
  
    window.onload = getDivHeight;
  window.onresize = getDivHeight;
//   // Run on window load
  
//   // Run on window resize
// function checkboxChanged() {
//     // const checkbox = document.getElementById('menu-toggle');
//     // const div = document.getElementById('sidebar');
//     // const width = div.offsetWidth; // Get the width of the div
//     // if (checkbox.checked) {
//     //     const size = `calc(100vw + ${width}px)`;
//     //     // const sidebarHeight = `calc(100vw + ${width}px)`;
//     // document.documentElement.style.setProperty('--my-section-width', size);
//     //     console.log('Checkbox is checked!',size);
//     //     // Add your functionality here for when the checkbox is checked
//     // } else {
//     //     const size = `calc(100vw - ${width}px)`;
//     //     document.documentElement.style.setProperty('--my-section-width', size);
//     //     console.log('Checkbox is unchecked!',size);
//     //     // Add your functionality here for when the checkbox is unchecked
//     // }
//     const sidebar = document.getElementById('sidebar');
//     const menuToggle = document.getElementById('menu-toggle');
//     const menuLabel = document.querySelector('.menu-icon');
    
//     if (menuToggle.checked) {
//         sidebar.style.left = `calc(-1 * var(--my-div-width))`; // Hide sidebar
//         menuLabel.setAttribute('aria-expanded', 'false');
//     } else {
//         menuLabel.setAttribute('aria-expanded', 'true');
//         sidebar.style.left = '0'; // Show sidebar
//     }
// }
function checkboxChanged() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const menuLabel = document.querySelector('.menu-icon');
    const sections = document.querySelector('.sections');
    const mainNav = document.querySelector('.main-nav');


    if (menuToggle.checked) {
        menuLabel.setAttribute('aria-expanded', 'true');
        sidebar.style.left = `calc(-1 * var(--my-div-width))`; // Hide sidebar
        menuLabel.setAttribute('aria-expanded', 'false');
        sections.classList.remove('full-width');
        mainNav.classList.remove('menu-width');
        sections.classList.add('sidebar-open');
        mainNav.classList.add('menu-open');
    } else {
        sidebar.style.left = '0'; // Show sidebar
        sections.classList.remove('sidebar-open');
        mainNav.classList.remove('menu-open');
        mainNav.classList.add('menu-width');
        sections.classList.add('full-width');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.1 // Adjust threshold as needed
    });
    sections.forEach(section => {
        observer.observe(section);
    });
});


  
/* offcanvas closing */
   let lastScrollTop = 0;
        // Capture the current scroll position
        window.addEventListener('scroll', function () {
            lastScrollTop = window.scrollY;
        });
        document.querySelector('.btn-close').addEventListener('click', function (event) {
            // Prevent default action
            event.preventDefault();
            // Close the offcanvas
            const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        });
        // Restore scroll position after closing offcanvas
        document.getElementById('offcanvasDarkNavbar').addEventListener('hidden.bs.offcanvas', function () {
            setTimeout(() => {
                window.scrollTo(0, lastScrollTop);
            }, 0);
        });
        // Close the offcanvas when an anchor is clicked
        document.querySelectorAll('.offcanvas-body a').forEach(anchor => {
            anchor.addEventListener('click', function () {
                // Get the offcanvas element
                const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) {
                    setTimeout(() => {
                        offcanvas.hide(); // Close the offcanvas
                    }, 380);
                }
            });
        });

/* sidebar */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });
        // Add active class to the clicked link
        this.classList.add('active');
    });
});
/* home */const names = ["Frontend Developer", "Mobile App Developer", "Responsive UI/UX Developer", "Freelancer" ];
let currentIndex = 0;
let currentName = "";
let charIndex = 0;
const typingSpeed = 50; // Typing speed in milliseconds
const backspacingSpeed = 50; // Backspacing speed in milliseconds
const pauseDuration = 1000; // Pause duration after a name

function typeName() {
    if (currentIndex < names.length) {
        if (charIndex < names[currentIndex].length) {
            currentName += names[currentIndex].charAt(charIndex);
            document.getElementById("output").innerText = currentName;
            charIndex++;
            setTimeout(typeName, typingSpeed);
        } else {
            // Pause after typing the full name
            setTimeout(() => {
                backspaceName();
            }, pauseDuration);
        }
    } else {
        // Reset to the first name after the last one
        currentIndex = 0;
        setTimeout(typeName, typingSpeed); // Start typing the first name
    }
}

function backspaceName() {
    if (charIndex > 0) {
        currentName = currentName.slice(0, -1);
        document.getElementById("output").innerText = currentName;
        charIndex--;
        setTimeout(backspaceName, backspacingSpeed);
    } else {
        // Move to the next name after backspacing
        currentIndex++;
        charIndex = 0;
        setTimeout(typeName, typingSpeed); // Start typing the next name
    }
}

typeName();

// const scrollContainer = document.querySelector('.scroll-content');

// let scrollSpeed = 10; // Adjust the speed of the scroll
// let scrollAmount = 0;

// function autoScroll() {
//     scrollAmount += scrollSpeed;
//     if (scrollAmount >= scrollContainer.scrollWidth) {
//         scrollAmount = 0; // Reset the scroll
//     }
//     scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
//     requestAnimationFrame(autoScroll); // Call the function again for a smooth effect
// }

// autoScroll(); // Start the auto-scrolling
/* top scroll */
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 443 || document.documentElement.scrollTop > 443){
        mybutton.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* skills */
// Optional: If you want to adjust the speed dynamically, you can use JavaScript.
// But in this example, the animation is handled purely with CSS.

const scrollContent = document.querySelector('.scroll-content');
const images = document.querySelectorAll('.scroll-content div');

// Clone images for continuous effect
images.forEach(img => {
    const clone = img.cloneNode(true);
    scrollContent.appendChild(clone);
});

/* contact */
// (function(){
//     emailjs.init("41WB_jOmxMfvuw542"); // Replace with your EmailJS user ID
// })();
(function(){
    emailjs.init({publicKey: "41WB_jOmxMfvuw542"});
 })();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const templateParams = {
        from_name: document.getElementById("name-field").value,
        from_email: document.getElementById("email-field").value,
        subject: document.getElementById("subject-field").value,
        message: document.getElementById("message-field").value
    };

    emailjs.send('service_kshn234', 'template_y7feo1i', templateParams)
        .then(function(response) {
            console.log('Your message has been sent. Thank you!',response);
            document.getElementById("contact-form").reset();
        }, function(error) {
            console.log('Error: Unable to send email.',error);
        });
});