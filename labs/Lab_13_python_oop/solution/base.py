from abc import ABCMeta, abstractmethod


class BaseXlsBlock(metaclass=ABCMeta):
    TITLE = "TITLE"
    def __init__(self, workbook, worksheet, row, col, some_data):
        self.workbook = workbook
        self.worksheet = worksheet
        self.row = row
        self.col = col
        self.some_data = some_data
        self.header_format = {
            'border': 2,
            'color': '#002060',
            'bold': True,
            'bg_color': '#FCD5B4',
            'font_size': 14,
            'font_name': 'Arial'

        }

        self.title_format = {
            'bold': True,
            'bg_color': '#C5D9F1',
            'border': 3,
            'font_size': 10,
            'font_name': 'Arial'
        }

        self.title2_format = {
            'bold': False,
            'bg_color': '#C5D9F1',
            'border': 3,
            'font_size': 10,
            'font_name': 'Arial'
        }
        self.column_format = {
            'bold': False,
            'font_size': 11,
            'font_name': 'Calibri',
            'italic': True
        }

    @abstractmethod
    def writer_some_data(self):
        pass

    @abstractmethod
    def writer_header(self):
        pass
    