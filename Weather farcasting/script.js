const inputBox = document.querySelector('.input-box'); // Corrected class name
const searchBtn = document.getElementById('searchbtn');
const weatherImage = document.querySelector('.weather-image'); // Corrected class name
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity'); // Corrected selector
const wind = document.querySelector('#wind-speed'); // Corrected selector

async function checkWeather(city) {
    const apiKey = "ba11e291372f0daa886d2f890fa262f7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Added units=metric for Celsius

    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        // Check if the city was found
        if (weatherData.cod === "404") {
            alert("City not found!");
            return;
        }

        console.log(weatherData);

        // Update the DOM with the weather data
        temperature.innerHTML = `${Math.round(weatherData.main.temp)}<sup>°C</sup>`;
        description.textContent = weatherData.weather[0].description;
        humidity.textContent = `${weatherData.main.humidity}%`;
        wind.textContent = `${weatherData.wind.speed} km/h`;

        // Update the weather image based on the weather condition
        const weatherCondition = weatherData.weather[0].main.toLowerCase();
        console.log('Weather condition:', weatherCondition);

        switch (weatherCondition) {
            case 'clear':
                weatherImage.src = "C:\Users\dell\Desktop\NOTES\webpra\Weather farcasting\assest\clear"; // Corrected path
                break;
            case 'clouds':
                weatherImage.src = "C:\Users\dell\Desktop\NOTES\webpra\Weather farcasting\assest\cloud"; // Corrected path
                break;
            case 'rain':
                weatherImage.src = "C:\Users\dell\Desktop\NOTES\webpra\Weather farcasting\assest\rain"; // Corrected path
                break;
            case 'snow':
                weatherImage.src = "C:\Users\dell\Desktop\NOTES\webpra\Weather farcasting\assest\snow"; // Corrected path
                break;
            case 'thunderstorm':
                weatherImage.src = "C:\Users\dell\Desktop\NOTES\webpra\Weather farcasting\assest\mist"; // Corrected path
                break;
            default:
                weatherImage.src = "C:\Users\dell\Desktop\NOTES\webpra\Weather farcasting\assest/cloud"; // Default path
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert("Error fetching weather data");
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
