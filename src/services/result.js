const BASE_URL = import.meta.env.VITE_BASE_URL;

export const submitResult = async (result) => {
  try {
    const res = await fetch(`${BASE_URL}/mbti/result`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.text();
    return data;
  } catch (error) {
    console.error('Error submitting result:', error);
    throw error;
  }
};

export const fetchResult = async (result) => {
  try {
    const res = await fetch(`${BASE_URL}/mbti/result/${result}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data: ', error);
    throw error;
  }
};
