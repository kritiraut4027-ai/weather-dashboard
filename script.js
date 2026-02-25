// 1. Select the form and the input box from the HTML
const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');

// 2. Add an event listener to handle the search
weatherForm.addEventListener('submit', (event) => {
    // Stop the page from reloading
    event.preventDefault();
    
    // Get the city name the user typed
    const cityName = cityInput.value;
    
    // Check if it's working by printing to the console
    console.log("Searching for weather in:", cityName);
});