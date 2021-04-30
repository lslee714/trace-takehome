from flask import Flask
from flask_cors import CORS

session = None
app = None

def create_app(config):
    global app
    app = Flask(__name__)
    app.config.from_object(config)
    CORS(app)
    register_blueprints(app)
    return app

def register_blueprints(app):
    """Register the blueprints"""
    #have to import to get order proper for db to be initialized :(
    from .blueprints import FARMS

    blueprints = [FARMS]
    for bp in blueprints:
        app.register_blueprint(bp)
