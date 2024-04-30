import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  const handleClose = () => {
    setSelectedBook(null);
  };

  return (
    <Container>
      <h4>Book List:</h4>
      <Row className="justify-content-center">
        {books && books.map((book, index) => (
          <Col key={index} xs={12} md={4} lg={3} className='my-3'>
            <Card className="h-100" onClick={() => handleCardClick(book)}>
              {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              ) : (
                <div className="d-flex justify-content-center align-items-center h-100">No Picture Available</div>
              )}
              <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={selectedBook !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBook && selectedBook.volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBook && (
            <div>
              <p><strong>Authors:</strong> {selectedBook.volumeInfo.authors.join(', ')}</p>
              <p><strong>Description:</strong> {selectedBook.volumeInfo.description}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BookList;
