from flask import Flask
from app.view import init_app
from flask_cors import CORS


def create_app():

    app = Flask(__name__, static_folder=None)
    init_app(app)
    CORS(app)

    return app

