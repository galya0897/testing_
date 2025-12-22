const systems = [
  { name: 'mir', pattern: /^220[0-4]\d*/ },
  { name: 'visa', pattern: /^4\d*/ },
  { name: 'mastercard', pattern: /^(5[1-5]\d*|2(2[2-9]\d*|[3-6]\d*|7([01]\d*|20\d*)))/ },
  { name: 'maestro', pattern: /^(50|5[6-9]|6\d)\d*/ },
  { name: 'amex', pattern: /^3[47]\d*/ },
  { name: 'jcb', pattern: /^35\d*/ },
];

export default function paymentSystem(number) {
  const value = String(number).replace(/\D/g, '');
  const system = systems.find(({ pattern }) => pattern.test(value));
  return system ? system.name : null;
}
