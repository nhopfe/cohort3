import csv


def data_reader(file):
    with open(file, "r") as csv_file:
        csv_data = csv.reader(csv_file)
        header = next(csv_data)
        CLASS = header.index('CLASS')
        SECTOR = header.index('SECTOR')
        RES_CNT = header.index('RES_CNT')
        class_totals = dict()
        sect_totals = dict()
        data = []
        for row in csv_data:
            class_totals[row[CLASS]] = class_totals.get(row[CLASS], 0) + int(row[RES_CNT])
            sect_totals[row[SECTOR]] = sect_totals.get(row[SECTOR], 0) + int(row[RES_CNT])
        data.append(class_totals)
        data.append(sect_totals)
    csv_file.close()
    data_report(data, file)
    return data


def data_report(data, file):
    with open('report.txt', 'w') as report:
         total_report_rows = 0
         report.write("CITY DATA REPORT\n")
         report.write(f"\nFile: {file}\n")
         report.write("\n====================\n")
         report.write("\nReport:\n")
         report.write('{:30} {}'.format("\n CLASS", "RES_CNT Total\n\n"))
         for key, value in data[0].items():
             report.write('{:30} {}'.format(f"{key}", f"{value}\n"))
             total_report_rows += 1
         report.write("\n-----\n")
         report.write('{:30} {}'.format("\nSECTOR", "RES_CNT Total\n\n"))
         for key, value in data[1].items():
             report.write('{:30} {}'.format(f"{key}", f"{value}\n"))
             total_report_rows += 1
         report.write("\n-----\n")
         report.write('{:30} {}'.format("\nREPORT", "Total\n\n"))
         report.write('{:30} {}'.format("CLASS / SECTOR Lines", f"{total_report_rows}\n"))
         report.write("\n====================\n")
    report.close()
    return report


data_reader("/code/cohort3/src/python/comp 220/Census_by_Community_2018.csv")