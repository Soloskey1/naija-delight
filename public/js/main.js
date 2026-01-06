document.addEventListener('DOMContentLoaded', () => {
  // --- Elements ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.menu-link');
  const dropdown = document.getElementById('dropdown');

  /* Explore Button
  const exploreButton = document.getElementById('exploreButton');
  const spinner = document.getElementById('spinnerContainer'); */
  

  // --- Mobile Menu Logic ---
  mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click or outside click
  menuLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));



  // --- Modal Logic ---
  if (openModalBtn) {
      openModalBtn.addEventListener('click', () => menuModal.classList.replace('hidden', 'flex'));
  }
  if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => menuModal.classList.replace('flex', 'hidden'));
  }

  /* --- Explore Button with Spinner --- */
  if (exploreButton) {
      exploreButton.addEventListener('click', function() {
          this.style.pointerEvents = 'none';
          this.style.opacity = '0.7';
          spinner.classList.remove('hidden');
          
          setTimeout(() => {
              window.location.href = 'gallery.html';
          }, 2000);
      });
  } 

  // --- Global Click Handler (Closes everything when clicking outside) ---
  document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
          mobileMenu.classList.add('hidden');
      }
      if (!dropdown.contains(e.target) && !bellBtn.contains(e.target)) {
          dropdown.classList.add('hidden');
      }
      if (e.target === menuModal) {
          menuModal.classList.replace('flex', 'hidden');
      }
  });

  // --- Intersection Observer (Scroll Animations) ---
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});


// Js script to view menu logic 
document.addEventListener('DOMContentLoaded', () => {
    const menuModal = document.getElementById('menuModal');
    const openModalBtn = document.getElementById('openMenuModal');
    const closeModalBtn = document.getElementById('closeMenuModal');
  
    // --- Modal Logic ---
    if (openModalBtn && menuModal) {
        openModalBtn.addEventListener('click', () => {
            // Replace 'hidden' with 'flex' to show the modal
            menuModal.classList.replace('hidden', 'flex');
            // Optional: Prevent background scrolling
            document.body.style.overflow = 'hidden'; 
        });
    }
  
    if (closeModalBtn && menuModal) {
        closeModalBtn.addEventListener('click', () => {
            // Replace 'flex' back with 'hidden' to hide it
            menuModal.classList.replace('flex', 'hidden');
            // Restore scrolling
            document.body.style.overflow = 'auto';
        });
    }
  
    // --- Close Modal on Outside Click ---
    document.addEventListener('click', (e) => {
        // If the user clicks exactly on the darkened background (the modal container itself)
        if (e.target === menuModal) {
            menuModal.classList.replace('flex', 'hidden');
            document.body.style.overflow = 'auto';
        }
    });
  });