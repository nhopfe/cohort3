def python_data_type(data):
	return type(data)

def python_if_else(data):
	if type(data) == str:
		return "string"
	else:
		return "not a string"

def python_insert(li, index, dataInserted):
	li.insert(index, dataInserted)
	return li

def python_append(li, dataAppended):
	li.append(dataAppended)
	return li

def python_update(li, dataRemove, index, newData):
	li.remove(dataRemove)
	li.insert(index, newData)
	return li

def python_for_loop(test_li):
	li = test_li
	new_li = []
	for x in li:
		new_li.insert(0, x)
	return new_li

def python_while_loop(num):
	i = 0
	total = 0
	while i <= num:
		total += i
		i += 1
	return total

def python_lookup_keys(dictionary, key):
	selected = dictionary[key]
	return selected