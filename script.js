// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    var sayingInput = document.getElementById('saying');
    var sayingText = sayingInput.value.trim();
    
    // Check if the input is not empty
    if (sayingText) {
        // Create a new list item with the saying text
        var listItem = document.createElement('li');
        listItem.textContent = sayingText;
        
        // Append the new list item to the list
        var sayingsList = document.getElementById('sayingsList');
        sayingsList.appendChild(listItem);
        
        // Clear the input field
        sayingInput.value = '';
    }
}

// Wait for the DOM to fully load before attaching event handlers
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element by its ID
    var form = document.getElementById('sayingsForm');
    
    // Attach the submit event handler to the form
    form.addEventListener('submit', handleFormSubmit);
});
