from .base import Config
from .production import ProductionConfig


def get_config(option):
    """ Return the config given an option"""
    configMapping = {
        'debug': Config,
        'live': ProductionConfig
    }
    config = configMapping.get(option, Config)
    return config

