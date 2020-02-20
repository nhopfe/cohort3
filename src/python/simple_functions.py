def email_func(fname, lname):
	if (type(fname) != str or type(lname) != str):
		return "Please enter valid first and last name."
	else:
		first = fname.lower()
		last = lname.lower()
		return first + "." + last + "@evolveu.ca"