import simple_functions

class TestEmailFunc:
	def test_email_func(self):
		assert simple_functions.email_func("Larry", "Shumlich") == "larry.shumlich@evolveu.ca"
		assert simple_functions.email_func(1, "Shumlich") == "Please enter valid first and last name."
		assert simple_functions.email_func("LARRY", "SHUMLICH") == "larry.shumlich@evolveu.ca"