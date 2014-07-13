import flask
import time
app = flask.Flask(__name__)
app.debug = True

@app.route('/')
def index():
    with open("static/index.html") as f:
        return f.read()


@app.route('/service_plus', methods=["POST"])
def service_plus():
    data = flask.request.json
    a = data["a"]
    b = data["b"]
    delay = data.get("delay", 0)
    time.sleep(delay)
    return flask.jsonify(**{
        "addition": a + b,
    })

@app.route('/service_mult', methods=["POST"])
def service_mult():
    data = flask.request.json
    a = data["a"]
    b = data["b"]
    delay = data.get("delay", 0)
    time.sleep(delay)
    return flask.jsonify(**{
        "multiplication": a * b,
    })

if __name__ == '__main__':
    app.run()
