import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const BookDetail = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="h-100" onClick={handleShowModal}>
        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
          <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        ) : (
          <div className="d-flex justify-content-center align-items-center h-100">No Picture Available</div>
        )}
        <Card.Body>
          <Card.Title>{book.volumeInfo.title}</Card.Title>
        </Card.Body>
      </Card>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{book.volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Authors:</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
          <p><strong>Description:</strong> {book.volumeInfo.description ? book.volumeInfo.description : 'No description available'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookDetail;