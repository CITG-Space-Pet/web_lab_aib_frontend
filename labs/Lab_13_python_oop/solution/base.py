from abc import ABC, abstractmethod

class BaseXlsBlock(ABC):
    def __init__(self, worksheet, workbook, row, col, data):
        self.worksheet = worksheet
        self.workbook = workbook
        self.row = row
        self.col = col
        self.data = data
    @abstractmethod
    def write_header(self):
        pass

    @abstractmethod
    def write_data(self):
        pass