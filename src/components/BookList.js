import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookDetail from './BookDetail';

const BookList = ({ books }) => {
  return (
    <Container>
      <h4>Book List:</h4>
      <Row className="justify-content-center">
        {books && books.map((book, index) => (
          <Col key={index} xs={12} md={4} lg={3} className='my-3'>
            <BookDetail book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
