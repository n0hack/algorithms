[curH, curM] = map(int, input().split())
m = int(input())

[adder, m] = divmod(curM + m, 60)
[_, h] = divmod(curH + adder, 24)

print(h, m)
