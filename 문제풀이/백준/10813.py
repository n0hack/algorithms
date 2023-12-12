[n, m] = map(int, input().split())
baskets = [i + 1 for i in range(n)]

for _ in range(m):
    [i, j] = map(int, input().split())
    [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]]


res = ""
for i in range(len(baskets)):
    res = res + str(baskets[i]) + " "

print(res)
