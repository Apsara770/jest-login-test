const validateLogin = require('./login');

test('valid login returns true', () => {
  expect(validateLogin('admin', '1234')).toBe(true);
});

test('invalid login returns false', () => {
  expect(validateLogin('user', 'wrong')).toBe(false);
});

test('empty fields return false', () => {
  expect(validateLogin('', '')).toBe(false);
});
