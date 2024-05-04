import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
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
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Book Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Button variant="outline-primary" onClick={() => setShowCart(true)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <h1 className="text-center mt-3">Book Store App</h1>
            <SearchBar onSearch={searchBooksHandler}/>
            <BookList books={books} addToCart={addToCart} />
            <Cart show={showCart} handleClose={handleCloseCart} selectedBooks={selectedBooks} />
        </Container>
    );
};

export default App;