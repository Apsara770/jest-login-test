function validateLogin(username, password) {
  if (!username || !password) return false;
  return username === 'admin' && password === '1234';
}
module.exports = validateLogin;
