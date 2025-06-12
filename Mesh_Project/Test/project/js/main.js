// Main application initialization

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set page title
  document.title = 'Admin Dashboard';
  
  // Add fade-in animation to the dashboard on load
  setTimeout(() => {
    const dashboard = document.getElementById('dashboard-section');
    if (dashboard) {
      dashboard.style.opacity = '1';
    }
  }, 100);
  
  // Log initialization
  console.log('Dashboard initialized successfully');
});