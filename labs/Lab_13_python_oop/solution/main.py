
from writer import XlsAnalyticPaymentWriter
import json
from datetime import datetime
def read_file(file_name):
    with open(file_name, "r", encoding="utf-8") as file:
        some_data = json.load(file)
        return some_data

def main():
    file_clients = '../clients.json'
    file_payments = '../payments.json'
    write_file =f"my_payments_analytics_{datetime.now().strftime('%Y-%m-%d')}.xlsx"
    data_clients = read_file(file_clients)
    data_payments = read_file(file_payments)
    some_data = {'clients': data_clients['clients'], 'payments': data_payments['payments']}
    analytic_writer = XlsAnalyticPaymentWriter(some_data)
    analytic_writer.writer(write_file)

if __name__ == '__main__':
    main()
    