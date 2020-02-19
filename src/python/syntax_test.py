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

class TestListMethods:
	def test_insert(self):
		li = [1, 2, 3]
		assert syntax.python_insert(li, 0, 4) == [4, 1, 2, 3]
		assert syntax.python_insert(li, 0, 5) == [5, 4, 1, 2, 3]
		assert syntax.python_insert(li, 4, 6) == [5, 4, 1, 2, 6, 3]
	def test_append(self):
		li = [1, 2, 3]
		assert syntax.python_append(li, 4) == [1, 2, 3, 4]
		assert syntax.python_append(li, 5) == [1, 2, 3, 4, 5]
	def test_update_list(self):
		li = [1, 2, 3]
		assert syntax.python_update(li, 2, 1, 4) == [1, 4, 3]
		assert syntax.python_update(li, 1, 2, 5) == [4, 3, 5]

class TestLoops:
	def test_for_loop(self):
		test_li = ["a", "b", "c"]
		assert syntax.python_for_loop(test_li) == ["c", "b", "a"]
		test_li = [1, 2, 3]
		assert syntax.python_for_loop(test_li) == [3, 2, 1]
	def test_while_loop(self):
		assert syntax.python_while_loop(5) == 15
		assert syntax.python_while_loop(10) == 55

class TestKeyLookup:
	def test_lookup_keys(self):
		lemon = {"type":"fruit", "color":"yellow", "taste":"sour"}
		assert syntax.python_lookup_keys(lemon, "color") == "yellow"
		assert syntax.python_lookup_keys(lemon, "taste") == "sour"