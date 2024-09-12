document.addEventListener("DOMContentLoaded", function () {
    const levels = document.querySelectorAll(".difficulty-bar .level");

    // Function to clear the selected state from all levels
    function clearSelection() {
        levels.forEach(level => {
            level.classList.remove('selected');
        });
    }

    // Add click event listener to each level
    levels.forEach(level => {
        level.addEventListener("click", function () {
            // Clear the selection from all levels
            clearSelection();

            // Mark the clicked level as selected
            this.classList.add('selected');
        });
    });
});
