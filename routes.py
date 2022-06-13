from dotenv import load_dotenv

import backend.chatbot
from flask import Flask, request

load_dotenv()
app = Flask(__name__)


@app.route("/api", methods=['GET'])
def api():
    return {"mood": "I'm doing wonderfully"}


@app.route("/input", methods=["POST"], strict_slashes=False)
def get_input():
    message = request.json['text']
    return backend.chatbot.start_bot(message)


if __name__ == '__main__':
    app.run(debug=True)
