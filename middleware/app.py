from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Welcome to the PI manager. Choose a route according to what you want to do.'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0') #accessible to any device on the network
