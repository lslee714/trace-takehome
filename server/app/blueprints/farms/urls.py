from flask import jsonify, request

from .helpers import FarmJsonHelper

def register(blueprint):
    """Register the routes for the blueprint"""

    @blueprint.route('', methods=['GET'])
    def get_farms():
        """Returns the farms"""
        farm_jsons = FarmJsonHelper().get_farms(request.args)
        return jsonify(farm_jsons)

