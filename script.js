// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    var sayingInput = document.getElementById('saying');
    var sayingText = sayingInput.value.trim();
    
    // Check if the input is not empty
    if (sayingText) {
        // Add the saying to localStorage
        addSayingToLocalStorage(sayingText);
        
        // Clear the input field
        sayingInput.value = '';
        
        // Update the displayed list
        displaySayings();
    }
}

// Function to add a saying to localStorage
function addSayingToLocalStorage(sayingText) {
    // Retrieve existing sayings from localStorage
    var sayings = JSON.parse(localStorage.getItem('sayingsList')) || [];
    
    // Add the new saying to the array
    sayings.push(sayingText);
    
    // Save the updated array back to localStorage
    localStorage.setItem('sayingsList', JSON.stringify(sayings));
}

// Function to display sayings from localStorage
function displaySayings() {
    // Retrieve existing sayings from localStorage
    var sayings = JSON.parse(localStorage.getItem('sayingsList')) || [];
    
    // Get the list element where sayings will be displayed
    var sayingsList = document.getElementById('sayingsList');
    
    // Clear the current list
    sayingsList.innerHTML = '';
    
    // Create and append list items for each saying
    sayings.forEach(function(saying) {
        var listItem = document.createElement('li');
        listItem.textContent = saying;
        sayingsList.appendChild(listItem);
    });
}

// Wait for the DOM to fully load before setting up event handlers and displaying sayings
document.addEventListener('DOMContentLoaded', function() {
    // Attach the submit event handler to the form
    var form = document.getElementById('sayingsForm');
    form.addEventListener('submit', handleFormSubmit);
    
    // Display the saved sayings on page load
    displaySayings();
});
