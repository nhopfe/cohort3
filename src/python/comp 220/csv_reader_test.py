import csv_reader


class TestCsvReader:
    def test_data_reader(self):
        assert csv_reader.data_reader(
            "/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")[0]['Industrial'] == 922
        assert csv_reader.data_reader(
            "/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")[0]['Residential'] == 1263734
        assert csv_reader.data_reader(
            "/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")[1]['CENTRE'] == 199977
        assert csv_reader.data_reader(
            "/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")[1]['NORTHWEST'] == 174126
    def test_data_report(self):
        data = csv_reader.data_reader("/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")
        report = csv_reader.data_report(data, "/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")
        with open(report.name, "r") as test_report:
            text = test_report.readlines()
            assert len(text) == 35
            assert text[2] == 'File: /code/cohort3/src/python/comp 220/Census_by_Community_2018.csv\n'
            assert text[10] == 'Residential                    1263734\n'
            assert text[19] == 'CENTRE                         199977\n'
            assert text[32] == 'CLASS / SECTOR Lines           12\n'
        test_report.close()