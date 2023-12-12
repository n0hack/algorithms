s = [i + 1 for i in range(30)]

for _ in range(28):
    n = int(input())
    s.pop(s.index(n))

print(s[0], s[1])
