const solution = (dots) => {
  // 기울기가 같으면 평행
  const [A, B, C, D] = dots;

  const mAB = Math.abs(A[0] - B[0]) / Math.abs(A[1] - B[1]);
  const mAC = Math.abs(A[0] - C[0]) / Math.abs(A[1] - C[1]);
  const mAD = Math.abs(A[0] - D[0]) / Math.abs(A[1] - D[1]);
  const mBC = Math.abs(B[0] - C[0]) / Math.abs(B[1] - C[1]);
  const mBD = Math.abs(B[0] - D[0]) / Math.abs(B[1] - D[1]);
  const mCD = Math.abs(C[0] - D[0]) / Math.abs(C[1] - D[1]);

  if (mAB === mCD || mAC === mBD || mAD === mBC) return 1;
  else return 0;
};
