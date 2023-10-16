export const test = (fn: (...args: any) => any) => {
  console.time('taken');
  console.log(fn());
  console.timeEnd('taken');
};
