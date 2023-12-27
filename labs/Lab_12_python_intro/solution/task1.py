def count_routes(N, M):
    mas = [[0] * (M+1) for _ in range(N+1)]
    mas[1][1] = 1

    for i in range(2, N + 1):
        for j in range(2, M + 1):
            mas[i][j] = mas[i - 1][j - 2] + mas[i - 2][j - 1]

    return mas[N][M]

if __name__ == '__main__':
    N = int(input("Введите количество строк N : "))
    M = int(input("Введите количество столбцов M : "))
    result = count_routes(N, M)
    print("Количество различных маршрутов: ", result)