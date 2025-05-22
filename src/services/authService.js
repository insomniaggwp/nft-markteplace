import { showLoading, hideLoading } from "../utils/loadingService";

export async function login({ username, password }) {
  showLoading();
  try {
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === "administrator1x" && password === "1xpassword") {
      localStorage.setItem('auth', JSON.stringify({
        token: 'mysecrettoken',
        username,
        isLogin: true
      }));
      return true;
    }
    throw new Error()
  } catch {
    return false;
  } finally {
    hideLoading()
  }
}

export async function logout() {
  showLoading();
  try {

    await new Promise(resolve => setTimeout(resolve, 1000));
   
    localStorage.removeItem("auth");
    return true;
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  } finally {
    hideLoading()
  }
}

export function isLoggedIn() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth).isLogin : false;
}

export function getUsername() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth).username : null;
}