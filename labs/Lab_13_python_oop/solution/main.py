from datetime import datetime
import json
import os
from writter import XlsAnalyticPaymentWriter

def load_data(file_name):
    path = os.path.join(
        './../', file_name
    )

    with open(path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    return data

if __name__ == '__main__':
    data_clients = load_data('clients.json')
    data_payments = load_data('payments.json')

    data = {'clients': data_clients['clients'], 'payments': data_payments['payments']}

    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    output_file = f'my_payments_analytics_{timestamp}.xlsx'

    xls_writer = XlsAnalyticPaymentWriter(data)
    xls_writer.write_excel_report(output_file)

    print(f"Report generated successfully. Output file: {output_file}")