process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [n, m] = data.split(' ').map((item) => parseInt(item));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) process.stdin.write('*');
    console.log();
  }
});
