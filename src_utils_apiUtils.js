```js
// Helper function to fetch weather data from OpenWeatherMap API
export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_OPENWEATHERMAP_API_KEY`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
```
For the backend, you would have a Flask application that receives the location data from the frontend and sends back weather data: