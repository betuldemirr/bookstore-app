import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookDetail from './BookDetail';

const BookList = ({ books, addToCart }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {books && books.length > 0 ? (
          books.map((book, index) => (
            <Col key={index} xs={6} md={4} lg={3} className='my-3'>
              <BookDetail book={book} addToCart={addToCart} />
            </Col>
          ))
        ) : (
          <Col>
            <p className='p-1'>No books</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BookList;