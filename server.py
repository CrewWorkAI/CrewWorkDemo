```python
from flask import Flask, request, jsonify
import requests
app = Flask(__name__)

@app.route('/api/weather', methods=['POST'])
def get_weather():
    data = request.get_json()  # Get location data from POST request
    lat, lon = data["lat"], data["lng"]  
    
    # Send a GET request to OpenWeatherMap API with the received coordinates
    response = requests.get(f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=YOUR_OPENWEATHERMAP_API_KEY")
    
    # Return weather data as JSON
    return jsonify(response.json()) 
  
if __name__ == '__main__':
    app.run()
```

To run this code, you need to replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual OpenWeatherMap API key and then start the Flask server (Python server.py). You also need a frontend React application that imports UserAuth component from src/components directory and starts it.