import os

def read_files(dir_path):
    return os.listdir(dir_path)

def sizes_of_files(dir_path):
    file_size_dict = dict()
    for (root, directory, files) in os.walk(dir_path, topdown=True):
        for x in files:
            fp = os.path.join(root, x)
            size = os.path.getsize(fp)
            file_size_dict[x] = size
    return file_size_dict

def directory_report(dir_path):
    files_dir = sizes_of_files(dir_path)
    file_count = len(files_dir)
    total_of_sizes = 0
    for x in files_dir:
        total_of_sizes += files_dir[x]
    return f'Directory {dir_path} contains {file_count} files totalling {total_of_sizes} bytes in size.'