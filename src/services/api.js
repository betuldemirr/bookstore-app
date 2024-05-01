import axios from 'axios';

const API_KEY = process.env.BOOKS_API_KEY;

const api = async (searchTerm) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`);
        console.log(response.data);
        return response.data.items;
    } catch (error) {
        console.error('Error fetching data from the server:', error);
        return [];
    }
};

export default api;