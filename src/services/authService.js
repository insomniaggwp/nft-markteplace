import { showLoading, hideLoading } from "../utils/loadingService";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function login({ username, password }) {
  showLoading();
  try {
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    const res = await fetch(`${BASE_URL}/users?username=${username}&password=${password}`);
    const users = await res.json();

    if (users.length > 0) {
      const user = users[0];
      localStorage.setItem('auth', JSON.stringify({
        token: user.token,
        username: user.username,
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

export async function isLoggedIn() {
  const authRaw = localStorage.getItem("auth");
  if (!authRaw) return false;

  const { token, username } = JSON.parse(authRaw);
  if (!token || !username) return false;

  try {
    // Fetch user by username from backend
    const res = await fetch(`/api/users?username=${username}`);
    if (!res.ok) return false;

    const users = await res.json();
    if (users.length === 0) return false;

    const user = users[0];
    // Compare tokens
    return user.token === token;
  } catch {
    return false;
  }
}

export function getUsername() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth).username : null;
}