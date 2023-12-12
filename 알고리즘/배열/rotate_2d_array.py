# 배열을 시계 방향으로 회전
def rotate_2d_array(arr):
    row_len = len(arr)
    col_len = len(arr[0])

    res = [[0] * row_len for _ in range(col_len)]

    for r in range(row_len):
        for c in range(col_len):
            res[c][row_len - 1 - r] = arr[r][c]

    return res


# 배열을 반시계 방향으로 회전
def rotate_2d_array_reverse(arr):
    row_len = len(arr)
    col_len = len(arr[0])

    res = [[0] * row_len for _ in range(col_len)]

    for r in range(row_len):
        for c in range(col_len):
            res[col_len - 1 - c][r] = arr[r][c]

    return res


arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
]

print(rotate_2d_array(arr))
print(rotate_2d_array_reverse(arr))
