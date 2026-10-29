document.addEventListener("DOMContentLoaded", function() {
    const sidebarCollapseBtn = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    sidebarCollapseBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});


