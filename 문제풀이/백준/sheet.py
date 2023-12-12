# 내장 함수

## sum
res = sum([1, 2, 3, 4, 5])
print(res)

## min, max
print(min(7, 3, 2, 1))
print(max(7, 3, 2, 1))

## sorted (key 속성을 통해, 정렬 기준 선택 가능 / 기본 오름차순)
print(sorted([("홍길동", 22), ("김철수", 25)], key=lambda x: x[1], reverse=True))

## list sort
data = [4, 3, 1, 2]
data.sort()
print(data)


# itertools
from itertools import permutations, combinations, product, combinations_with_replacement

## permutations (순열 / 뽑는 개수 기본값은 데이터의 길이)
data = ["A", "B", "C"]
print(list(permutations(data)))

## combinations (조합 / 뽑는 개수는 r로 설정)
print(list(combinations(data, r=2)))

## product (자기자신에 대해서는 중복을 허용하면서, n개를 뽑는 순열)
print(list(product(data, repeat=2)))

## combinations_with_replacement (자기자신에 대해서는 중복을 허용하면서, n개를 뽑는 조합)
print(list(combinations_with_replacement(data, r=2)))


# heapq (파이썬은 기본적으로 최소-힙만 제공)
import heapq


## 오름차순 정렬
def heapsort(iter):
    h = []
    result = []

    for v in iter:
        heapq.heappush(h, v)

    for _ in range(len(h)):
        result.append(heapq.heappop(h))

    return result


print(heapsort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]))


## 내림차순 정렬 (넣고 뺄 때 부호를 붙이는 식으로 처리)
def heapsort(iter):
    h = []
    result = []

    for v in iter:
        heapq.heappush(h, -v)

    for _ in range(len(h)):
        result.append(-heapq.heappop(h))

    return result


print(heapsort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]))


# bisect (이진탐색 / 정렬된 리스트 사용)
## 좌우 탐색 (정렬된 리스트 내에서, 특정 값 범위에 속하는 원소의 개수를 구할 때 효과적으로 사용 가능)
from bisect import bisect_left, bisect_right


def count_by_range(a, left_value, right_value):
    right_index = bisect_right(a, right_value)
    left_index = bisect_left(a, left_value)
    return right_index - left_index


# 값이 4인 데이터 개수
print(count_by_range([1, 2, 3, 3, 3, 3, 4, 4, 8, 9], 4, 4))

# 값이 [-1, 3] 범위 내에 있는 데이터 개수
print(count_by_range([1, 2, 3, 3, 3, 3, 4, 4, 8, 9], -1, 3))
