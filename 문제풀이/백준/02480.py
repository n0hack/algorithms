from collections import Counter

dices = map(int, input().split())
counter = list(Counter(dices).items())
counter.sort(key=lambda x: (x[1], x[0]), reverse=True)

res = 0

if len(counter) == 3:
    res = counter[0][0] * 100
elif len(counter) == 2:
    res = 1000 + counter[0][0] * 100
else:
    res = 10000 + counter[0][0] * 1000

print(res)
