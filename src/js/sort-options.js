document.addEventListener('DOMContentLoaded', function() {
    const sortOptions = document.querySelectorAll('.sort-option');
    
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            sortOptions.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
        });
    });
});
