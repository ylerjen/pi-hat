from flask import Flask, jsonify
from sense_hat import SenseHat
from hat_manager import HatManager

app = Flask(__name__)


@app.route('/')
def index():
    return 'Welcome to the PI manager. Choose a route according to what you want to do.'


@app.route('/status')
def get_status():
    sense_hat = SenseHat()
    hat_manager = HatManager(sense_hat)
    status = {'pressure': hat_manager.get_pressure, 'temperature': hat_manager.get_temperature, 'humidity': hat_manager.get_humidity}
    return jsonify({'status': status})

if __name__ == '__main__':
    # 0.0.0.0 = accessible to any device on the network
    app.run(debug=True, host='0.0.0.0')
