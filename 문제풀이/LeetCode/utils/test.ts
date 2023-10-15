export const test = (fn: (...args: any) => any) => {
  console.time('taken');
  fn();
  console.timeEnd('taken');
};
