from collections import Counter

N = int(input())
list = input().split()
v = input()

counter = dict(Counter(list))

print(counter[v] if v in counter else 0)
