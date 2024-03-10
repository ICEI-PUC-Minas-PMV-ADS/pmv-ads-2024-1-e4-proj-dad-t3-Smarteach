from flask import Flask
from app.view import init_app

def create_app():

    app = Flask(__name__, static_folder=None)
    init_app(app)

    return app

