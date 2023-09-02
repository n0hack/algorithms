const solution = (array, n) => array.map((v) => [v, Math.abs(n - v)]).sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0];
