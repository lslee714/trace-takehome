from flask import Blueprint

from .urls import register

FARMS = Blueprint('farms', __name__, url_prefix='/farms')

register(FARMS)
