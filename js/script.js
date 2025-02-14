function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.container').classList.toggle('active');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.querySelector('.container').classList.remove('active');
    }
}); 