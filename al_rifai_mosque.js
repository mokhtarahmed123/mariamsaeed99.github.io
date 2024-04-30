function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
}

// Function to check if dark mode is enabled
function isDarkModeEnabled() {
    // Check if body has 'dark-mode' class
    return document.body.classList.contains('dark-mode');
}

// Function to apply dark mode styles
function applyDarkModeStyles() {
    // If dark mode is enabled
    if (isDarkModeEnabled()) {
        // Apply dark mode styles
        // For example, you can change background color and text color
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        // You can apply more styles here as needed
    } else {
        // Apply light mode styles
        // Reset styles to default
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        // Reset more styles if needed
    }
}

// Event listener for the toggle button
document.addEventListener('DOMContentLoaded', function() {
    // Apply initial styles based on dark mode state
    applyDarkModeStyles();

    // Get the toggle button element
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = 'goldenrod';
    toggleButton.style.color = '#333';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';

    // Add event listener to toggle dark mode when button is clicked
    toggleButton.addEventListener('click', function() {
        toggleDarkMode();
        // Apply styles based on dark mode state
        applyDarkModeStyles();
    });

    // Append the toggle button to the body
    document.body.appendChild(toggleButton);
});