export default function luhn(number) {
  const digits = String(number).replace(/\D/g, '');

  if (digits.length < 12) return false;

  const reversed = [...digits].reverse().map(Number);

  const sum = reversed.reduce((acc, digit, idx) => {
    if (idx % 2 === 1) {
      const doubled = digit * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
    return acc + digit;
  }, 0);

  return sum % 10 === 0;
}
