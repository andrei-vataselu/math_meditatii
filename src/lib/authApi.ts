import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function signUp(formData) {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/signup`, formData, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function signIn(email, password) {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function signOut() {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function getCurrentUser() {
  try {
    const res = await axios.get(`${API_BASE_URL}/auth/me`, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function refreshToken() {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/refresh`, {}, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function updateUserProfile(updates) {
  try {
    const res = await axios.patch(`${API_BASE_URL}/user/profile`, updates, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function getPlans() {
  try {
    const res = await axios.get(`${API_BASE_URL}/plans`);
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function getUserPlan() {
  try {
    const res = await axios.get(`${API_BASE_URL}/plans/user`, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function createCheckoutSession(planId) {
  try {
    const res = await axios.post(`${API_BASE_URL}/stripe/create-checkout-session`, { planId }, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}

export async function cancelSubscription() {
  try {
    const res = await axios.post(`${API_BASE_URL}/stripe/cancel-subscription`, {}, { withCredentials: true });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.response?.data || { message: error.message } };
  }
}
