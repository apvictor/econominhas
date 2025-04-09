export function calculatePercentageGain(
  value: number,
  valuePrev: number,
): number {
  if (valuePrev == 0) return 0;

  const percent = (value / valuePrev) * 100;

  return Number(percent.toFixed(2));
}
