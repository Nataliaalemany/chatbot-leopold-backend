from dotenv import load_dotenv

# import ./backend/chatbot
from flask import Flask

#load_dotenv()
app = Flask(__name__)


@app.route("/api", methods=['GET'])
def api():
    return {"mood": "I'm doing great"}


if __name__ == '__main__':
    app.run(debug=True)
