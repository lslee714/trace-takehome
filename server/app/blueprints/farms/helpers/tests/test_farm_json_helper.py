from unittest import TestCase


from ..farm_json_helper import FarmJsonHelper


class TestGetFarms(TestCase):
    """Test cases of the get_farms method"""

    def test_with_no_query_args(self):
        """With no query args, all the farms from our data set should be returned"""
        helper = FarmJsonHelper()
        empty_query_params = {}
        farms = helper.get_farms(empty_query_params)
        expected_length = 7
        self.assertEqual(len(farms), expected_length)

    def test_with_name(self):
        """Should return farms that includes the passed in name"""
        helper = FarmJsonHelper()
        name_query = 'Star'
        name_query_param = {'farm_name': name_query}
        results = helper.get_farms(name_query_param)
        for result in results.values():
            self.assertIn(name_query, result['name'])

    def test_with_min_revenue(self):
        """Should only return farms that have at least that amount of min revenue"""
        helper = FarmJsonHelper()
        min_revenue = 100000
        min_revenue_param = {'min_revenue': min_revenue}
        results = helper.get_farms(min_revenue_param)
        for result in results.values():
            self.assertGreaterEqual(result['revenue'], min_revenue)

    def test_with_max_revenue(self):
        """Should only return farms that have at most that amount of max revenue"""
        helper = FarmJsonHelper()
        max_revenue = 10000
        max_revenue_param = {'max_revenue': max_revenue}
        results = helper.get_farms(max_revenue_param)
        for result in results.values():
            self.assertLessEqual(result['revenue'], max_revenue)

    def test_with_field_name(self):
        """Should only return farms that have the field name passed in"""
        helper = FarmJsonHelper()
        field_name = 'Hobbiton'
        #param name little misleading but that's how the API contract is structured
        field_name_param = {'farm_name': field_name}
        results = helper.get_farms(field_name_param)
        for result in results.values():
            self.assertIn(field_name, result['fields'])

    def test_with_soil_type(self):
        """Should only return farms that have the soil type passed in"""
        helper = FarmJsonHelper()
        soil_type = 'San Joaquin Series'
        #param name little misleading but that's how the API contract is structured
        soil_type_param = {'farm_name': soil_type}
        results = helper.get_farms(soil_type_param)
        for result in results.values():
            self.assertIn(soil_type, result['soil_type'])

    def test_with_multiple_query_params(self):
        """Should return farms that match any of the criteria"""
        helper = FarmJsonHelper()
        min_revenue = 3000200
        max_revenue = 10001
        farm_name = 'Shire'

        query_params = {'max_revenue': max_revenue, 'farm_name': farm_name, 'min_revenue': min_revenue}
        results = helper.get_farms(query_params)

        for result in results.values():
            revenue = result['revenue']
            #a bit tedious but gets the job done, ensure result at least matches one assertion
            try:
                self.assertIn(farm_name, result['name'])
            except AssertionError as name_error:
                try:
                    self.assertLessEqual(revenue, max_revenue)
                except AssertionError as max_revenue_error:
                        self.assertGreaterEqual(revenue, min_revenue)

    def test_with_no_matching(self):
        """When none matches, should return empty"""
        helper = FarmJsonHelper()
        name_query = 'Not a real farm'
        name_query_param = {'farm_name': name_query}
        results = helper.get_farms(name_query_param)
        self.assertEquals(len(results), 0)

    def test_with_invalid_number(self):
        """Should not explode and still return a valid result"""
        helper = FarmJsonHelper()
        name_query = 'Not a real farm'
        max_revenue_query = 'im not a number'
        name_query_param = {'farm_name': name_query, "max_revenue": max_revenue_query}
        results = helper.get_farms(name_query_param)
        self.assertEquals(len(results), 0)
