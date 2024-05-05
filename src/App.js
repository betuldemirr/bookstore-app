import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import { Container, Navbar, Button } from 'react-bootstrap';
import { searchBooks } from './services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [books, setBooks] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [selectedBooks, setSelectedBooks] = useState([]);

    const searchBooksHandler = async (searchTerm) => {
        const response = await searchBooks(searchTerm);
        setBooks(response);
    };

    const addToCart = (book) => {
        setSelectedBooks([...selectedBooks, book]);
        setShowCart(true);
    };    

    const handleCloseCart = () => {
        setShowCart(false);
    };

    return (
        <Container fluid className='px-0'>
            <Navbar className='p-3' bg="white" data-bs-theme="light" expand="lg">
                <Navbar.Text className="mx-auto">
                    <h1 className="text-center fw-bold mt-3">Book Store App</h1>
                </Navbar.Text>
                <Navbar.Text>
                    <Button variant="outline-dark" onClick={() => setShowCart(true)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                </Navbar.Text>
            </Navbar>

            <h3 className="text-center text-muted my-1">Browse the search results please...</h3>
            <SearchBar onSearch={searchBooksHandler}/>
            <BookList books={books} addToCart={addToCart} />
            <Cart show={showCart} handleClose={handleCloseCart} selectedBooks={selectedBooks} />
        </Container>
    );
};

export default App;