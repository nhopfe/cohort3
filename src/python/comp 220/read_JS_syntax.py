def read_syntax(): 
    syntax_page = open("C:/code/cohort3/src/javascript/syntax.js", "r")
    return syntax_page.read()

def line_total():
    number_of_lines = open("C:/code/cohort3/src/javascript/syntax.js", "r")
    line_count = 0
    for x in number_of_lines:
        line_count += 1
    return f"There are {line_count} lines in syntax document."

def else_statement_total():
    number_of_else_statements = open("C:/code/cohort3/src/javascript/syntax.js", "r")
    else_count = 0
    for x in number_of_else_statements:
        if "else" in x:
            else_count += 1
    return f"There are {else_count} else statements in syntax document."

def total_characters():
    syntax_characters = open("C:/code/cohort3/src/javascript/syntax.js", "r")
    char_count = syntax_characters.read()
    number_of_characters = len(char_count)
    return f"There are {number_of_characters} characters in syntax document."