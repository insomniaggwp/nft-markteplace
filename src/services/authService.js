export function login(username, password) {
  if (username === "administrator1x" && password === "1xpassword") {
    localStorage.setItem('auth', JSON.stringify({
      token: 'mysecrettoken',
      user: { username, isLogin: true }
    }));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("auth");
}

export function isLoggedIn() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth).isLogin : false;
}

export function getUsername() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth).username : null;
}