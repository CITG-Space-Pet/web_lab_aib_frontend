from base import BaseXlsBlock
from datetime import datetime
from collections import defaultdict


class TopPayersBlock(BaseXlsBlock):
    NAME = "Отчёт по активным клиентам"

    def write_header(self):
        self.worksheet.write(self.row, self.col, self.NAME, self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
        self.worksheet.write(self.row, self.col + 1, "ФИО", self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
        self.worksheet.write(self.row, self.col + 2, "Общая сумма", self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
    def write_data(self):
        self.col += 1
        self.row += 1

        clients = self.data['clients']
        payments = self.data['payments']

        quarterly_payments = defaultdict(lambda: defaultdict(float))
        for payment in payments:
            client_id = payment['client_id']
            amount = payment['amount']
            created_at = datetime.strptime(payment['created_at'], "%Y-%m-%dT%H:%M:%S.%fZ")
            quarter = (created_at.month - 1) // 3 + 1
            quarterly_payments[client_id][quarter] += amount

        top_payers = []
        for client_id, quarterly_data in quarterly_payments.items():
            total_amount = sum(quarterly_data.values())
            top_payers.append({'client_id': client_id, 'total_amount': total_amount})

        top_payers.sort(key=lambda x: x['total_amount'], reverse=True)
        top_payers = top_payers[:10]

        for i, payer in enumerate(top_payers, start=1):
            client_info = next(client for client in clients if client['id'] == payer['client_id'])
            fio = client_info['fio']
            self.worksheet.write(self.row + i - 1, self.col, f"{i}. {fio}")
            self.worksheet.write(self.row + i - 1, self.col + 1, f"{payer['total_amount']}")


class TopCitiesBlock(BaseXlsBlock):
    NAME = "География клиентов"

    def write_header(self):
        self.worksheet.write(self.row, self.col, self.NAME, self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
        self.worksheet.write(self.row, self.col + 1, "Город", self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
        self.worksheet.write(self.row, self.col + 2, "Количество клиентов", self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
    def write_data(self):
        self.col += 1
        self.row += 1

        clients = self.data['clients']

        city_counts = {}
        for client in clients:
            city = client['city']
            city_counts[city] = city_counts.get(city, 0) + 1

        top_cities = sorted(city_counts.items(), key=lambda x: x[1], reverse=True)[:10]

        for i, (city, count) in enumerate(top_cities, start=1):
            self.worksheet.write(self.row + i - 1, self.col, f"{i}. {city}")
            self.worksheet.write(self.row + i - 1, self.col + 1, f"{count}")


class AccountStatusBlock(BaseXlsBlock):
    NAME = "Анализ состояния счёта"
    def write_header(self):
        self.worksheet.write(self.row, self.col, self.NAME, self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
        self.worksheet.write(self.row, self.col + 1, "ФИО", self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
        self.worksheet.write(self.row, self.col + 2, "Баланс", self.workbook.add_format({'bg_color': 'pink', 'border': 1}))
    def write_data(self):
        self.col += 1
        self.row += 1
        clients = self.data['clients']
        payments = self.data['payments']

        account_balances = {}
        for payment in payments:
            client_id = payment['client_id']
            amount = payment['amount']
            account_balances[client_id] = account_balances.get(client_id, 0) + amount

        top_balances = sorted(account_balances.items(), key=lambda x: x[1], reverse=True)[:10]

        for i, (client_id, balance) in enumerate(top_balances, start=1):
            client_info = next(client for client in clients if client['id'] == client_id)
            fio = client_info['fio']
            self.worksheet.write(self.row + i - 1, self.col, f"{i}. {fio}")
            self.worksheet.write(self.row + i - 1, self.col + 1, f"{balance}")