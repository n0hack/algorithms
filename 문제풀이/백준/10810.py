# N: 개수이면서 번호 (바구니, 공), M: 공을 넣을 횟수
[n, m] = map(int, input().split())

baskets = [0 for _ in range(n)]

for _ in range(m):
    [i, j, k] = map(int, input().split())
    for idx in range(i - 1, j):
        baskets[idx] = k

res = ""
for i in range(len(baskets)):
    res = res + str(baskets[i]) + " "

print(res)
