total = int(input())
num_of_items = int(input())

res = 0
for i in range(num_of_items):
    [p, n] = map(int, input().split())
    res = res + (p * n)

print("Yes" if total == res else "No")
