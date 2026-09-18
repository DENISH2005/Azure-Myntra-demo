export type Currency = 'INR' | 'USD';

const EXCHANGE_RATE_USD_TO_INR = 83;

export function formatPrice(usdAmount: number, currency: Currency): string {
  if (currency === 'INR') {
    const inr = Math.round(usdAmount * EXCHANGE_RATE_USD_TO_INR);
    return `₹${inr.toLocaleString('en-IN')}`;
  }
  return `$${usdAmount.toFixed(0)}`;
}

export function calculateDiscount(original: number, current: number): number {
  if (original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
}
