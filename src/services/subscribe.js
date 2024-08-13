const BASE_URL = import.meta.env.VITE_BASE_URL;

export const subscribeNewsLetter = async (name, email) => {
  try {
    await fetch(`${BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
  } catch (error) {
    console.error('Error submitting result:', error);
    throw error;
  }
};
