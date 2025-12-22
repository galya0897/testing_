import paymentSystem from '../src/js/paymentSystem.js';

describe('Payment system detection', () => {
  test('detect MIR', () => {
    expect(paymentSystem('2200152933622402')).toBe('mir');
    expect(paymentSystem('2204999999999999')).toBe('mir');
  });

  test('detect Visa', () => {
    expect(paymentSystem('4111111111111111')).toBe('visa');
    expect(paymentSystem('4000000000000000')).toBe('visa');
  });

  test('detect Mastercard', () => {
    expect(paymentSystem('5500000000000004')).toBe('mastercard'); 
    expect(paymentSystem('2221000000000009')).toBe('mastercard'); 
    expect(paymentSystem('2720999999999999')).toBe('mastercard');
  });

  test('detect Maestro', () => {
    expect(paymentSystem('5018000000000000')).toBe('maestro'); 
    expect(paymentSystem('5600000000000000')).toBe('maestro'); 
    expect(paymentSystem('6999999999999999')).toBe('maestro'); 
  });

  test('detect AmEx', () => {
    expect(paymentSystem('340000000000009')).toBe('amex'); 
    expect(paymentSystem('370000000000002')).toBe('amex'); 
  });

  test('detect JCB', () => {
    expect(paymentSystem('3528000700000000')).toBe('jcb');
    expect(paymentSystem('3589999999999999')).toBe('jcb');
  });

  test('return null for unknown', () => {
    expect(paymentSystem('1234567890123456')).toBeNull();
    expect(paymentSystem('')).toBeNull();
    expect(paymentSystem('6000000000000000')).toBeNull(); 
  });
});
