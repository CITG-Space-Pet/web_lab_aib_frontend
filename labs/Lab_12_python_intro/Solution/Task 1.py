def count_routes(N, M):
    arr = [[0] * (M+1) for _ in range(N+1)]
    arr[1][1] = 1
    for i in range(1, N+1):
        for j in range(1, M+1):
            if (i >= 2 and j >= 1) or (i >= 1 and j >= 2):
                arr[i][j] += arr[i-2][j-1] + arr[i-1][j-2]
    return arr[N][M]
N, M = map(int, input().split())
print(count_routes(N, M))