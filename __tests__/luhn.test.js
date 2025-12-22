import luhn from '../src/js/luhn.js';

describe('Luhn algorithm', () => {
  test('valid card numbers pass', () => {
    expect(luhn('2200152933622402')).toBe(true); // МИР
    expect(luhn('4111111111111111')).toBe(true); // Visa
    expect(luhn('5500000000000004')).toBe(true); // Mastercard
    expect(luhn('340000000000009')).toBe(true); // AmEx
    expect(luhn('6759649826438453')).toBe(true); // Maestro
    expect(luhn('3528000700000000')).toBe(true); // JCB
  });

  test('invalid card numbers fail', () => {
    expect(luhn('2200152933622401')).toBe(false);
    expect(luhn('4111111111111110')).toBe(false);
    expect(luhn('5500000000000000')).toBe(false);
    expect(luhn('340000000000000')).toBe(false);
    expect(luhn('5018000000000001')).toBe(false);
    expect(luhn('3528000700000001')).toBe(false);
  });

  test('non-digit characters ignored', () => {
    expect(luhn('2200-1529 3362 2402')).toBe(true);
    expect(luhn('4111 1111 1111 1111')).toBe(true);
    expect(luhn('3528-0007 0000 0000')).toBe(true);
  });

  test('too short numbers fail', () => {
    expect(luhn('123')).toBe(false);
    expect(luhn('')).toBe(false);
  });
});
