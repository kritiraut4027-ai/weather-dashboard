// 1. Your unique key from OpenWeatherMap
const apiKey = '785a0c88b295e77f2c63ca8d3447afab'; 

// 2. Select the elements from the HTML
const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');

// 3. Listen for the search action
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the page from refreshing
    
    const city = cityInput.value;
    
    // This is the URL we use to "call" the weather server
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log("Fetching weather for:", city);
    

    // The "Handshake" - Go get the data!
    fetch(url)
        .then(response => response.json()) // Turn the response into a JS object
        .then(data => {
            console.log("Weather Data Received:", data);

    // 1. Find the elements on the page
    const weatherBox = document.getElementById('weather-display');
    const cityHeading = document.getElementById('display-city');
    const tempParagraph = document.getElementById('display-temp');
    const humidityParagraph = document.getElementById('display-humidity');

    // 2. Put the real data into those elements
    cityHeading.textContent = data.name; 
    tempParagraph.textContent = "Temperature: " + data.main.temp + "°C";
    humidityParagraph.textContent = "Humidity: " + data.main.humidity + "%ls";

    // 3. Make the box visible
    weatherBox.classList.remove('hidden');
})

            // 1. Link the HTML elements to variables
            const weatherDisplay = document.getElementById('weather-display');
            const cityName = document.getElementById('city-name');
            const temperature = document.getElementById('temperature');

            // 2. Put the data into the tags
            cityName.textContent = data.name; 
            temperature.textContent = `Temperature: ${data.main.temp}°C`;

            // 3. Make the box visible!
            weatherDisplay.classList.remove('hidden');
        })

        .catch(error => {
            console.error("Error fetching weather:", error);
        });
