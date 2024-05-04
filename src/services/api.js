import axios from 'axios';

const API_KEY = 'AIzaSyAlLHP3hLyscu9NfakV2BXQiCQ4OyAOE4g';

export const getBookDetails = async (bookId) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        const data = await response.json();
        
        if (data.saleInfo && data.saleInfo.saleability === "FOR_SALE") {
            return data;
        } else {
            console.error('Book with ID:', bookId, 'is not for sale.');
            return null;
        }
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