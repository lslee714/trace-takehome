import json
from unittest import TestCase

from .. import create_app

from .test_config import TestConfig


#should move these to own file when theres more routes/blueprints to test
def create_test_client():
    """Create test flask client w/ same app structure"""
    app = create_app(TestConfig)
    return app.test_client()

def response_json(res):
    """Parse the response json"""
    return json.loads(res.get_data(as_text=True))


class TestBlueprintWorks(TestCase):
    """Simple test case to make sure blueprint is wired in"""
    BLUEPRINT_URL = '/farms'

    def test_returns_farm_json(self):
        client = create_test_client()
        response = client.get(self.BLUEPRINT_URL)
        res_json = response_json(response)
        all_farm_len = 7
        self.assertEqual(len(res_json), all_farm_len)


