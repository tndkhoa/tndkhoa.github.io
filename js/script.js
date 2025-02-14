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

// Thêm function mới để load menu
document.addEventListener('DOMContentLoaded', function() {
    // Load menu
    fetch('components/menu.html')
        .then(response => response.text())
        .then(data => {
            // Chèn menu vào đầu body
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Highlight menu item hiện tại
            highlightCurrentPage();
        });
});

// Function để highlight trang hiện tại trong menu
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.sidebar ul li a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.parentElement.classList.add('active');
        }
    });
} 