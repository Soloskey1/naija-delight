 // Mobile Menu Script
  const mobileMenuButton = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const MenuLinks = document.querySelectorAll('.menu-link');
  const exploreButton = document.getElementById('exploreButton');
  const spinner = document.getElementById('spinnerContainer');
  const navBar = document.querySelector('nav');
  // Modal Script
  const openMenuModal = document.getElementById('openMenuModal');
  const closeMenuModal = document.getElementById('closeMenuModal');
  const menuModal = document.getElementById('menuModal');

  // bell button script
  const bellBtn = document.getElementById('bellBtn');
  const dropdown = document.getElementById("dropdown");

  // Close menu when an item is clicked
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  }); 


  //
  document.addEventListener('DOMContentLoaded', () => {
     // 1. Toggle function
    const toggleMenu = () => {
        const isMenuOpen = mobileMenuButton.classList.contains('menu-open');

        if (isMenuOpen) {
            // Close the menu
            mobileMenuButton.classList.remove('menu-open');
            mobileMenu.classList.add('hidden');
        } else {
            // Open the menu
            mobileMenuButton.classList.add('menu-open');
            mobileMenu.classList.remove('hidden');
        }
    };
    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close on Outside Click (Clicking anywhere outside the navigation bar)
    document.addEventListener('click', (event) => {
        const isMenuOpen = mobileMenuButton.classList.contains('menu-open');

        // Check if the click is outside the entire navigation bar AND the menu is open
        if (isMenuOpen && !navBar.contains(event.target)) {
             toggleMenu(); // Calls the toggle function to close it
        }
    });
  });


  // Close menu when any link is clicked
  MenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  //  Script for notification bell 
  bellBtn.addEventListener('click', (e) => {
  // Prevent the event from bubbling up to the document
  e.stopPropagation(); 
  dropdown.classList.toggle('hidden');
  }); 

  // Close when clicked outside
  document.addEventListener('click', (e) => {
    // If the click is NOT on the button and NOT on the dropdown
    if (!bellBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  }); 

  /* Script for animation 
  document.addEventListener('DOMContentLoaded', () => {
     const sections = document.querySelectorAll('.slide-in-up, .slide-in-fade');

     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
       });
     }, {
       threshold: 0.2, // Trigger when 20% of the section is visible
       rootMargin: '0px 0px -50px 0px' // Start a bit early
     });

     sections.forEach(section => {
       observer.observe(section);
     });
  });  */


  /// 1. Get references to the elements

    if (exploreButton && spinnerContainer) {
        // Set the delay duration and target URL
        const delayDuration = 3000; // 3000 milliseconds = 3 seconds
        const targetUrl = 'gallery.html'; 

        // Add the click event listener
        exploreButton.addEventListener('click', function() {
            
            // Prevent clicking the button multiple times while processing
            exploreButton.classList.add('is-loading');
            
            // Show the spinner container (text stays visible)**
            spinner.classList.remove('hidden'); 
            
            // **STEP 2: Set the 3-second delay**
            setTimeout(function() {
                
                // **STEP 3: After the delay, perform the redirect**
                window.location.href = targetUrl;
                
            }, delayDuration); 
        });
    } else {
        console.error("One or more required button elements were not found in the DOM.");
    }

    // Modal functionality
    if (openMenuModal && closeMenuModal && menuModal) {
    openMenuModal.addEventListener('click', () => {
      menuModal.classList.remove('hidden');
      menuModal.classList.add('flex');
    });

    closeMenuModal.addEventListener('click', () => {
      menuModal.classList.add('hidden');
      menuModal.classList.remove('flex');
    });

    // Close when clicking background
    menuModal.addEventListener('click', (e) => {
      if (e.target === menuModal) {
        menuModal.classList.add('hidden');
        menuModal.classList.remove('flex');
      }
    });
  }