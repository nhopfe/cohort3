def taxes(taxableAmount):
		firstBracket = 48535
		secondBracket = 97069
		thirdBracket = 150473
		fourthBracket = 214368
		frstBrckTaxes = firstBracket * .15
		scndBrckTaxes = (secondBracket - firstBracket) * .205
		thrdBrckTaxes = (thirdBracket - secondBracket) * .26
		frthBrckTaxes = (fourthBracket - thirdBracket) * .29
		ffthBrckTaxes = (taxableAmount - fourthBracket) * .33
		if taxableAmount <= 0 or type(taxableAmount) != float and type(taxableAmount) != int: 
				return "Please enter valid taxable amount"
		elif (taxableAmount < firstBracket):
				return round((taxableAmount * .15), 2)
		elif (taxableAmount > firstBracket and taxableAmount < secondBracket):
				remainder = taxableAmount - firstBracket
				return round(((remainder * .205) + (firstBracket * .15)), 2)
		elif (taxableAmount > secondBracket and taxableAmount < thirdBracket):
				remainder = taxableAmount - secondBracket
				return round(((remainder * .26) + scndBrckTaxes + frstBrckTaxes), 2)
		elif (taxableAmount > thirdBracket and taxableAmount < fourthBracket):
				remainder = taxableAmount - thirdBracket
				return round(((remainder * .29) + thrdBrckTaxes + scndBrckTaxes + frstBrckTaxes), 2)
		else:
				remainder = taxableAmount - fourthBracket
				return round(((remainder * .33) + frthBrckTaxes + thrdBrckTaxes + scndBrckTaxes + frstBrckTaxes), 2)