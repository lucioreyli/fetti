export const calculateLatency = (fn: () => any) => {
  const t1 = performance.now();
  const res = fn();
  const t2 = performance.now();

  const latency = t2 - t1;
  return { result: res, latency };
};
