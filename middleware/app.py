from flask import Flask, jsonify, request
from sense_hat import SenseHat
from hat_manager import HatManager

app = Flask(__name__)

sense_hat = SenseHat()
hat_manager = HatManager(sense_hat)


@app.route('/')
def index():
    return 'Welcome to the PI manager. Choose a route according to what you want to do.'


@app.route('/status')
def get_status():
    status = {'pressure': hat_manager.get_pressure, 'temperature': hat_manager.get_temperature, 'humidity': hat_manager.get_humidity}
    return jsonify({'status': status})


@app.route('/message', methods=['POST'])
def print_message():
    if not request.json or not 'message' in request.json:
        abort(400)
    message = request.json['message']
    color = request.json['text_color']
    bg_color = request.json['bg_color']
    hat_manager.set_message(message)


if __name__ == '__main__':
    # 0.0.0.0 = accessible to any device on the network
    app.run(debug=True, host='0.0.0.0')
