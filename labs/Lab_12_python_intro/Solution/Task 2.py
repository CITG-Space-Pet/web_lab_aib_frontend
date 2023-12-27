import heapq
def find(length, array):
    maximum, minimum, result = [], [], 0
    for i in range(length):
        heapq.heappush(maximum, -array[i])  
        heapq.heappush(minimum, -heapq.heappop(maximum))
        
        if len(minimum) > len(maximum):
            heapq.heappush(maximum, -heapq.heappop(minimum))  
        result -= maximum[0]
    return result
length, array =int(input()), list(map(int, input().split()))
print(find(length, array))