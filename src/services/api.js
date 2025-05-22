const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const user = JSON.parse(localStorage.getItem("auth"));

export async function fetchCampaigns() {
  const response = await fetch(`${BASE_URL}/campaigns`);
  if (!response.ok) throw new Error('Failed to fetch campaigns');
  const data = await response.json();
  return data;
}

export async function fetchTones() {
  try {
    if (!user.isLogin) {
      alert('ERROR you need Login first')
    }
    const response = await fetch(`${BASE_URL}/tones`);
    if (!response.ok) throw new Error('Failed to fetch tones');
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Error fetching tones:', error);
    throw error;
  }
}
