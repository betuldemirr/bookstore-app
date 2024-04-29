import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BookList = ({ books }) => {
  return (
    <Container>
      <h4>Book List:</h4>
      <Row className="justify-content-center">
        {books && books.map((book, index) => (
          <Col key={index} xs={12} md={4} lg={3} className='my-3'>
            <Card className="h-100">
              {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              ) : (
                <div className="text-center p-3">No Picture Available</div>
              )}
              <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
