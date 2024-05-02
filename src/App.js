import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import { searchBooks } from './services/api';

const App = () => {
    const [books, setBooks] = useState([]);

    const searchBooksHandler = async (searchTerm) => {
        const response = await searchBooks(searchTerm);
        setBooks(response);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Book Store App</h1>
                    <SearchBar onSearch={searchBooksHandler}/>
                    <BookList books={books} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;