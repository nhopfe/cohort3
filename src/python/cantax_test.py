import cantax

class TestTaxes:
	def test_taxes(self):
		assert cantax.taxes(0) == "Please enter valid taxable amount"
		assert cantax.taxes(1) == .15
		assert cantax.taxes(2) == .30
		assert cantax.taxes(50000) == 7580.57
		assert cantax.taxes(100000) == 17991.78
		assert cantax.taxes(150000) == 30991.78
		assert cantax.taxes(250000) == 61402.87