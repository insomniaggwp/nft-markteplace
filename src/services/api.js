import { isLoggedIn } from "./authService";
import { showLoading, hideLoading } from "../utils/loadingService";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchCampaigns() {
  showLoading();
  try {

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!isLoggedIn()) {
      throw new Error('Login Required')
    }

    const response = await fetch(`${BASE_URL}/campaigns`);
    if (!response.ok) throw new Error('Failed to fetch campaigns');
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  } finally {
    hideLoading();
  }
}

export async function fetchTones() {
  const response = await fetch(`${BASE_URL}/tones`);
  if (!response.ok) throw new Error('Failed to fetch campaigns');
  const data = await response.json();
  return data;
}
