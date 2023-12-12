[n, m] = map(int, input().split())

baskets = [i + 1 for i in range(n)]

for _ in range(m):
    [i, j] = map(int, input().split())
    baskets = baskets[: i - 1] + list(reversed(baskets[i - 1 : j])) + baskets[j:]

res = ""
for i in range(len(baskets)):
    res = res + str(baskets[i]) + " "

print(res)
