from dotenv import load_dotenv

# import chatbot
from flask import Flask

#load_dotenv()
app = Flask(__name__)


@app.route("/home")
def home():
    return {"cheese": ["cheese1", "cheese2", "cheese3"]}


if __name__ == '__main__':
    app.run(debug=True)
