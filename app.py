```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({'message': 'Hello, World!'})
    
if __name__ == "__main__":
    app.run(debug=True)
```
This Python script creates a simple Flask web server that listens for GET requests at the /api/hello endpoint and responds with JSON object `{'message': 'Hello, World!'}`. 

To run this script:
1. Save it as app.py in your project directory (or any name you prefer).
2. Run it using Python interpreter or a tool like Flask's built-in server via command line with `python app.py`.
3. Access the endpoint at http://localhost:5000/api/hello in your web browser to see 'Hello, World!' message.

This script should be run and tested locally before deploying it into a production environment due to lack of security checks like input validation or error handling. 

Please adjust this example according to your project needs, such as adding logging, database integration, user authentication etc.