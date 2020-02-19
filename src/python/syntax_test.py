import syntax

class TestDataTypes:
	def test_int(self):
		assert syntax.python_data_type(1) == int
		assert syntax.python_data_type("test") != int
	def test_float(self):
		assert syntax.python_data_type(1.0) == float
		assert syntax.python_data_type(10) != float
	def test_string(self):
		assert syntax.python_data_type("test") == str
		assert syntax.python_data_type(10) != str
	def test_boolean(self):
		assert syntax.python_data_type(True) == bool
		assert syntax.python_data_type(False) == bool
		assert syntax.python_data_type("test") != bool
	def test_tuple(self):
		assert syntax.python_data_type((0, 1)) == tuple
		assert syntax.python_data_type(("test", "test")) == tuple
		assert syntax.python_data_type(("test", 1)) == tuple
		assert syntax.python_data_type("test") != tuple
	def test_list(self):
		assert syntax.python_data_type([]) == list
		assert syntax.python_data_type([0, "test"]) == list
		assert syntax.python_data_type({}) != list
	def test_set(self):
		assert syntax.python_data_type({1, 2}) == set
		assert syntax.python_data_type({"a", "b"}) == set
		assert syntax.python_data_type({}) != set
		assert syntax.python_data_type({'test1': 1, 'test2': 2}) != set

class TestIfElse:
	def test_if_else(self):
		assert syntax.python_if_else("test") == "string"
		assert syntax.python_if_else(0) == "not a string"
		assert syntax.python_if_else(True) == "not a string"