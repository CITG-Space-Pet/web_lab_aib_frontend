n = int(input())
x = list(map(int, input().split()))

import heapq

left_heap = []  # куча для хранения меньших элементов
right_heap = []  # куча для хранения больших элементов

def add_element(num):
    if not left_heap and not right_heap:
        heapq.heappush(left_heap, -num)
    elif num >= get_median():
        heapq.heappush(right_heap, num)
    else:
        heapq.heappush(left_heap, -num)
    balance_heaps()

def balance_heaps():
    while abs(len(left_heap) - len(right_heap)) > 1:
        if len(left_heap) > len(right_heap):
            heapq.heappush(right_heap, -heapq.heappop(left_heap))
        else:
            heapq.heappush(left_heap, -heapq.heappop(right_heap))

def get_median():
    if len(left_heap) == len(right_heap):
        return (right_heap[0] - left_heap[0]) / 2
    elif len(left_heap) > len(right_heap):
        return -left_heap[0]
    else:
        return right_heap[0]

medians = []
add_element(x[0])
medians.append(x[0])

for i in range(1, n):
    add_element(x[i])
    medians.append(get_median())

print(int(sum(medians) % 10000))