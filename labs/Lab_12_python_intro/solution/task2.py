def median_sum(n, X):
    medians = []

    for i in range(1, n + 1):
        subsequence = X[:i]
        subsequence.sort()

        length = len(subsequence)
        if length % 2 == 1:
            median = subsequence[length // 2]
        else:
            median = (subsequence[length // 2 - 1] + subsequence[length // 2]) / 2

        medians.append(median)

    median_sum = sum(medians)
    return median_sum

n = int(input("Введите n: "))
X = list(map(int, input("Введите последовательность чисел X: ").split()))

result = median_sum(n, X)
print(result)