import json
import os



class FarmJsonHelper:

    @property
    def farms(self):
        """The farms we have.. The data from the file, normally could be a query set"""
        current_path = os.path.dirname(os.path.realpath(__file__))
        data = None
        with open(os.path.join(current_path, 'farm_data.json')) as json_file:
            data = json.load(json_file)
        return data

    def get_farms(self, query_params):
        """Return the farms given any query params"""
        return self.farms


