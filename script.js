// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the value from the input field
    var truismInput = document.getElementById('truism');
    var truismText = truismInput.value.trim();
    
    // Check if the input is not empty
    if (truismText) {
        // Add the truism to localStorage
        addtruismToLocalStorage(truismText);
        
        // Clear the input field
        truismInput.value = '';
        
        // Update the displayed list
        displayTruisms();
    }
}

// Function to add a truism to localStorage
function addtruismToLocalStorage(truismText) {
    // Retrieve existing Truisms from localStorage
    var Truisms = JSON.parse(localStorage.getItem('TruismsList')) || [];
    
    // Add the new truism to the array
    Truisms.push(truismText);
    
    // Save the updated array back to localStorage
    localStorage.setItem('TruismsList', JSON.stringify(Truisms));
}

// Function to display Truisms from localStorage
function displayTruisms() {
    // Retrieve existing Truisms from localStorage
    var Truisms = JSON.parse(localStorage.getItem('TruismsList')) || [];
    
    // Get the list element where Truisms will be displayed
    var TruismsList = document.getElementById('TruismsList');
    
    // Clear the current list
    TruismsList.innerHTML = '';
    
    // Create and append list items for each truism
    Truisms.forEach(function(truism) {
        var listItem = document.createElement('li');
        listItem.textContent = truism;
        TruismsList.appendChild(listItem);
    });
}

// Wait for the DOM to fully load before setting up event handlers and displaying Truisms
document.addEventListener('DOMContentLoaded', function() {
    // Attach the submit event handler to the form
    var form = document.getElementById('TruismsForm');
    form.addEventListener('submit', handleFormSubmit);
    
    // Display the saved Truisms on page load
    displayTruisms();
});
