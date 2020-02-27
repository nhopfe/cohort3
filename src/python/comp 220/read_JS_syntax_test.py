import read_JS_syntax

class TestSyntaxReader:
    def test_read_syntax(self):
        assert len(read_JS_syntax.read_syntax()) == 3253
    def test_line_total(self):
        assert read_JS_syntax.line_total() == "There are 110 lines in syntax document."
    def test_else_statement_total(self):
        assert read_JS_syntax.else_statement_total() == "There are 1 else statements in syntax document."
    def test_total_characters(self):
        assert read_JS_syntax.total_characters() == "There are 3253 characters in syntax document."