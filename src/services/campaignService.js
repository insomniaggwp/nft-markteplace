import { isLoggedIn } from './authService';
import { showLoading, hideLoading } from '../utils/loadingService';
import { AuthenticationError } from './errors.js';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchGetCampaigns({
  filteredStatus,
  searchCampaignName,
}) {
  showLoading();
  try {
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
      throw new AuthenticationError();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    let query = '';

    if (filteredStatus) query += `?status=${filteredStatus}`;
    if (searchCampaignName)
      query += `${query ? '&' : '?'}campaignName_like=${searchCampaignName}`;

    const response = await fetch(`${BASE_URL}/campaigns${query}`);

    if (!response.ok) throw new Error('Failed to fetch campaigns');

    const data = await response.json();

    return data;
  } catch (error) {
    throw { message: error.message || 'Unknown error' };
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

export async function fetchDeleteCampaign(id) {
  showLoading();
  try {
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
      throw new AuthenticationError();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${BASE_URL}/campaigns/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete campaign with id ${id}`);
    }

    return true;
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  } finally {
    hideLoading();
  }
}

export async function fetchPostCampaign(body) {
  showLoading();
  try {
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
      throw new AuthenticationError();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${BASE_URL}/campaigns`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to add campaign`);
    }

    return response;
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  } finally {
    hideLoading();
  }
}

export async function fetchCampaignDetail(id) {
  showLoading();
  try {
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
      throw new AuthenticationError();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${BASE_URL}/campaigns/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed get campaign`);
    }

    return response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  } finally {
    hideLoading();
  }
}

export async function fetchPutCampaign({ id, body }) {
  showLoading();
  try {
    const loggedIn = await isLoggedIn();

    if (!loggedIn) {
      throw new AuthenticationError();
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${BASE_URL}/campaigns/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to edit campaign`);
    }

    return response;
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  } finally {
    hideLoading();
  }
}
