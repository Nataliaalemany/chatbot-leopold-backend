from dotenv import load_dotenv

import chatbot
from flask import Flask, request

load_dotenv()
app = Flask(__name__)


@app.route("/input", methods=["GET", "POST"], strict_slashes=False)
def get_input():
    message = request.json['text']
    return chatbot.start_bot(message)


if __name__ == '__main__':
    app.run(debug=True)
