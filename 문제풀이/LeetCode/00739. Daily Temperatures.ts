// Runtime (250ms, 40.12%) / Memory (66.56MB, 63.56%)
import { test } from './utils/test';

function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[stack.at(-1)!] < temperatures[i]) {
      const poppedIndex = stack.pop() as number;
      result[poppedIndex] = i - poppedIndex;
    }
    stack.push(i);
  }

  return result;
}

test(() => dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
test(() => dailyTemperatures([30, 40, 50, 60]));
test(() => dailyTemperatures([30, 60, 90]));
