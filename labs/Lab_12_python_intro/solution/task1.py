
def knight_moves(N, M):
    dp = [[0] * M for _ in range(N)]
    dp[0][0] = 1

    for i in range(1, N):
        for j in range(1, M):
            if i - 2 >= 0 and j - 1 >= 0:
                dp[i][j] += dp[i - 2][j - 1]
            if i - 1 >= 0 and j - 2 >= 0:
                dp[i][j] += dp[i - 1][j - 2]

    return dp[N - 1][M - 1]


if __name__ == '__main__':
    N, M = map(int, input().split())
    print(knight_moves(N, M))