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
        def search(targets):
            targets = [word.lower() for word in targets]
            results = 0
            with open(report.name, "r") as test_report:
                for line in test_report:
                    line = line.strip().lower()
                    for word in targets:
                        if word in line:
                            results += 1
            test_report.close()
            return results
        assert search(['class']) == 2
        assert search(['CLASS']) == 2
        assert search(['residential']) == 1
        assert search(['WordThatShouldNotExistInReport']) == 0
