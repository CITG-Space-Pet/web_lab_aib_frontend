import xlsxwriter
from block import Parameters,Report,Geography,Status
class XlsAnalyticPaymentWriter:
    ANALYTICS_BLOCKS_CLASSES = [
        Parameters,
        Report,
        Geography,
        Status
    ]
    def __init__(self, some_data):
        self.data = some_data
        self.position = 0
    def writer(self, write_file):
        workbook = xlsxwriter.Workbook(write_file)
        worksheet = workbook.add_worksheet()
        worksheet.set_column('A:Z', 35)
        row = 0
        col = 0
        for items in self.ANALYTICS_BLOCKS_CLASSES:
            item_init = items(workbook,worksheet, row, col, self.data)
            item_init.writer_header()
            item_init.writer_some_data()
        workbook.close()
