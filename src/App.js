import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import api from './api';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    const [books, setBooks] = useState([]);

    const searchBooks = async (searchTerm) => {
        const response = await api(searchTerm);
        setBooks(response);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Book Store App</h1>
                    <SearchBar onSearch={searchBooks}/>
                    <BookList books={books} />
                </Col>
            </Row>
        </Container>
    );
};

export default App;