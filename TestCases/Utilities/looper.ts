export function loopTests(times: number, testFn: (index: number) => void) {
  for (let i = 0; i < times; i++) {
    testFn(i);
  }
}