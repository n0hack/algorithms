N = int(input())

res = ""

q = N // 4
r = N % 4

for _ in range(q):
    res += "long "

res += "int"

print(res)
