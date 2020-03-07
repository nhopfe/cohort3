import read_directory

class TestDirectoryReader:
    def test_read_files(self):
        new_list = read_directory.read_files("C:/code/cohort3/src/01-getting-started/")
        assert type(new_list) == type([])
        assert new_list[0] == 'images'
    def test_sizes_of_files(self):
        new_dict = read_directory.sizes_of_files("C:/code/cohort3/src/01-getting-started/")
        assert new_dict["index.css"] == 2978
    def test_directory_report(self):
        new_report = read_directory.directory_report("C:/code/cohort3/src/01-getting-started/")
        assert type(new_report) == type("")
        assert new_report == "Directory C:/code/cohort3/src/01-getting-started/ contains 7 files totalling 116685 bytes in size."