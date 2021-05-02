import json
import os



class FarmJsonHelper:

    #only public method to get farms
    def get_farms(self, query_params):
        """Return the farms given any query params"""
        farms = self.__query_for_farms(**query_params)
        return farms

    @property
    def __farms(self):
        """The farms we have.. The data from the file, normally could be a query set"""
        current_path = os.path.dirname(os.path.realpath(__file__))
        with open(os.path.join(current_path, 'farm_data.json')) as json_file:
            data = json.load(json_file)
        return data

    def __query_for_farms(self, farm_name=None, min_revenue=None, max_revenue=None):
        """Return farms given restrictions"""
        #could/would be a query for database/persistent layer if we had it
        if not (farm_name or min_revenue or max_revenue):
            return self.__farms
        results = {}
        for id, farm in self.__farms.items():
            revenue = farm['revenue']
            name = self.__get_farm_name(farm)
            #doing "OR"s rather than "AND"s might make more sense for "AND" in a bigger dataset?
            #also would love to make the farm_name more robust, e.g. can separate multiple w/ comma
            if farm_name and farm_name.lower() in name.lower():
                results[id] = farm
            if min_revenue and revenue >= int(min_revenue):
                results[id] = farm #this could/will override results but we dont care in an OR situation
            if max_revenue and revenue <= int(max_revenue):
                results[id] = farm #this could/will override results but we dont care in an OR situation
        return results

    def __get_farm_name(self, farm):
        """Return an string concat between farm name + its fields + soil types"""
        name = farm['name']
        farm_field_names = ' '.join(name.lower() for name in farm['fields'])
        name += f' {farm_field_names}'
        name += f' {farm["soil_type"]}'
        return name
