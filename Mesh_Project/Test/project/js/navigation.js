// Navigation functionality

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const sidebar = document.getElementById('sidebar');
  const openSidebarBtn = document.getElementById('openSidebar');
  const closeSidebarBtn = document.getElementById('closeSidebar');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');
  
  // Toggle sidebar on mobile
  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden', 'md:overflow-auto');
  }
  
  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
  }
  
  // Content section switching
  function switchSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      // Use setTimeout to create a visual transition effect
      setTimeout(() => {
        targetSection.classList.add('active');
      }, 10);
    }
    
    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === sectionId) {
        link.classList.add('active');
      }
    });
    
    // On mobile, close sidebar after selection
    if (window.innerWidth < 768) {
      closeSidebar();
    }

    // Update URL hash
    window.location.hash = sectionId;
  }
  
  // Event listeners
  openSidebarBtn.addEventListener('click', openSidebar);
  closeSidebarBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      switchSection(sectionId);
    });
  });
  
  // Window resize handler
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
    }
  });
  
  // Handle initial load and back/forward navigation
  function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    switchSection(hash);
  }

  window.addEventListener('hashchange', handleHashChange);
  
  // Initialize with current hash or dashboard section
  handleHashChange();
});