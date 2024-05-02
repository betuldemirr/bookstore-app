import axios from 'axios';

const API_KEY = 'AIzaSyAlLHP3hLyscu9NfakV2BXQiCQ4OyAOE4g';

export const getBookId = async (bookId) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};

export const searchBooks = async (searchTerm) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching data from the server:', error);
    return [];
  }
};