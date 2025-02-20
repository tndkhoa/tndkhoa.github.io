// Debug
console.log('Script loaded');
let isSearching = false;
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

// Đợi cho đến khi DOM được load hoàn toàn
window.addEventListener('load', function() {
    console.log('Window loaded');

    // Menu HTML đơn giản
    const menuHTML = `
    <button class="menu-toggle">
        <i class="fas fa-bars"></i> Menu
    </button>
    <div class="sidebar">
        <div class="search-box">
            <input type="text" class="search-input" placeholder="Tìm kiếm hàm...">
            <i class="fas fa-search"></i>
        </div>
        <ul class="nav-menu">
            <li><a href="index.html">Trang chủ</a></li>
            <li><a href="vlookup.html">VLOOKUP</a></li>
            <li><a href="hlookup.html">HLOOKUP</a></li>
            <li><a href="xlookup.html">XLOOKUP</a></li>
            <li><a href="index-match.html">INDEX-MATCH</a></li>
        </ul>
    </div>`;

    // Chèn menu
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
    console.log('Menu inserted');

    // Đợi một chút để đảm bảo DOM đã được cập nhật
    setTimeout(() => {
        // Xử lý click menu
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (menuToggle && sidebar) {
            console.log('Menu elements found');
            
            // Toggle menu khi click nút menu
            menuToggle.addEventListener('click', function(e) {
                console.log('Menu clicked');
                e.preventDefault();
                e.stopPropagation();
                sidebar.classList.toggle('active');
            });

            // Đóng menu khi click ngoài
            document.addEventListener('click', function(e) {
                const clickedElement = e.target;
                if (!sidebar.contains(clickedElement) && 
                    !menuToggle.contains(clickedElement) && 
                    sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            });
        } else {
            console.error('Menu elements not found');
            console.log('menuToggle:', menuToggle);
            console.log('sidebar:', sidebar);
        }
    }, 100);
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

document.addEventListener('DOMContentLoaded', function() {
    // Menu HTML với cấu trúc mới
    const menuHTML = `
    <button class="menu-toggle">
        <i class="fas fa-bars"></i> Menu
    </button>
    <div class="sidebar">
        <div class="search-box">
            <input type="text" class="search-input" placeholder="Tìm kiếm hàm...">
            <i class="fas fa-search"></i>
        </div>

        <ul class="nav-menu">
            <li class="home-item">
                <a href="index.html"><i class="fas fa-home"></i> Trang chủ</a>
            </li>
            
            <li class="menu-group">
                <div class="menu-header">
                    <i class="fas fa-search"></i> Tìm kiếm & Tham chiếu
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul class="submenu">
                    <li><a href="vlookup.html">VLOOKUP</a></li>
                    <li><a href="hlookup.html">HLOOKUP</a></li>
                    <li><a href="xlookup.html">XLOOKUP</a></li>
                    <li><a href="excel-index.html">INDEX</a></li>
                </ul>
            </li>

            <li class="menu-group">
                <div class="menu-header">
                    <i class="fas fa-database"></i> Hàm Xử lý Dữ liệu
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul class="submenu">
                    <li><a href="filter.html">FILTER</a></li>
                    <li><a href="groupby.html">GROUPBY</a></li>
                    <li><a href="pivotby.html">PIVOTBY</a></li>
                </ul>
            </li>

            <li class="menu-group">
                <div class="menu-header">
                    <i class="fas fa-code"></i> Hàm Lập trình
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul class="submenu">
                    <li><a href="let.html">LET</a></li>
                    <li><a href="lambda.html">LAMBDA</a></li>
                </ul>
            </li>

            <li class="menu-group">
                <div class="menu-header">
                    <i class="fas fa-chart-bar"></i> Hàm Thống kê
                    <i class="fas fa-chevron-down"></i>
                </div>
                <ul class="submenu">
                    <li><a href="sum.html">SUM</a></li>
                    <li><a href="count.html">COUNT</a></li>
                    <li><a href="countif.html">COUNTIF</a></li>
                </ul>
            </li>
        </ul>
    </div>`;

    // Chèn menu vào đầu body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // Lấy các elements sau khi đã chèn vào DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const menuGroups = document.querySelectorAll('.menu-group');

    // Xử lý click menu
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        sidebar.classList.toggle('active');
        if (container) {
            container.classList.toggle('menu-active');
        }
    });

    // Đóng menu khi click ngoài
    document.addEventListener('click', function(e) {
        if (sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            if (container) {
                container.classList.remove('menu-active');
            }
        }
    });

    // Xử lý hover cho menu groups
    menuGroups.forEach(group => {
        const submenu = group.querySelector('.submenu');
        if (submenu) {
            group.addEventListener('mouseenter', () => {
                if(!isSearching){
                    submenu.style.display = 'block';
                }
            });
            group.addEventListener('mouseleave', () => {
                if(!isSearching){
                    submenu.style.display = 'none';
                }
            });
        }
    });
});


function searchMenu() {
    const searchInput = document.querySelector('.search-input');
    const menuGroups = document.querySelectorAll('.menu-group');
    const menu = document.querySelector('.submenu');
    
    if (!menu || !searchInput) return;
    
    // Thêm biến để theo dõi trạng thái tìm kiếm
 
    
    searchInput.addEventListener('focus', function() {
        isSearching = true;
    });
    
    searchInput.addEventListener('blur', function() {
        if (!this.value) {
            isSearching = false;
        }
    });
    
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        isSearching = searchTerm.length > 0;
        
        menu.classList.toggle('searching', isSearching);
        
        menuGroups.forEach(group => {
            const groupTitle = group.querySelector('.menu-header');
            const menuHeader = group.querySelector('.menu-header-content');
            const subMenus = group.querySelectorAll('.submenu');
            let hasVisibleItem = false;
            
            // Xử lý các hàm trong menu header
            if (menuHeader) {
                const menuItems = menuHeader.querySelectorAll('a, span');
                menuItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        item.style.display = 'block';
                        hasVisibleItem = true;
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
            
            // Xử lý các submenu và các hàm trong submenu
            subMenus.forEach(submenu => {
                const submenuItems = submenu.querySelectorAll('a, span');
                let hasVisibleSubmenuItem = false;
                
                submenuItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    const liParent = item.closest('li');
                    if (!searchTerm) {
                        // Hiển thị tất cả và khôi phục style khi không có từ khóa tìm kiếm
                        item.style.display = 'block';
                        if (liParent) {
                            liParent.style.display = 'list-item';
                          //  liParent.style.listStyle = 'none'; // Bỏ dấu đầu dòng
                        }
                        hasVisibleSubmenuItem = true;
                        hasVisibleItem = true;
                        submenu.style.display = 'block';
                    } else if (text.includes(searchTerm)) {
                        // Hiển thị các item khớp với từ khóa
                        item.style.display = 'block';
                        if (liParent) {
                            liParent.style.display = 'list-item';
                            //liParent.style.listStyle = 'none'; // Bỏ dấu đầu dòng khi tìm thấy
                        }
                        hasVisibleSubmenuItem = true;
                        hasVisibleItem = true;
                    } else {
                        // Ẩn các item không khớp
                        item.style.display = 'none';
                        if (liParent) {
                            liParent.style.display = 'none';
                        }
                    }
                });
                
                // Chỉ ẩn/hiện submenu khi đang tìm kiếm
                if (searchTerm) {
                    submenu.style.display = hasVisibleSubmenuItem ? 'block' : 'none';
                }
            });
            
            // Hiển thị tất cả group và header khi không có từ khóa tìm kiếm
            if (!searchTerm) {
                group.style.display = 'block';
                if (groupTitle) {
                    groupTitle.style.display = 'block';
                    // Hiển thị lại icon khi không có từ khóa tìm kiếm
                    const icons = groupTitle.querySelectorAll('i');
                    icons.forEach(icon => icon.style.display = 'inline-block');
                }
            } else {
                group.style.display = hasVisibleItem ? 'block' : 'none';
                if (groupTitle) {
                    groupTitle.style.display = hasVisibleItem ? 'block' : 'none';
                    // Hiển thị lại icon khi có kết quả tìm kiếm
                    const icons = groupTitle.querySelectorAll('i');
                    icons.forEach(icon => icon.style.display = hasVisibleItem ? 'inline-block' : 'none');
                }
            }
        });
    });
}

// Gọi hàm khi trang được load
document.addEventListener('DOMContentLoaded', searchMenu); 