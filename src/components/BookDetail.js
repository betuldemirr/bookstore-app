import React, { useState, useEffect } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { getBookDetails } from '../services/api';

const BookDetail = ({ book, addToCart }) => {
    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            const bookDetails = await getBookDetails(book.id);

            if (bookDetails && bookDetails.saleInfo && bookDetails.saleInfo.listPrice.amount !== '') {
                setPrice(bookDetails.saleInfo.listPrice.amount);
            } else {
                console.error('Price data not available for book with ID:', book.id);
            }
        };
        fetchPrice();
    }, [book.id]);


    const onShowModal = () => {
        setShowModal(true);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };

    const onAddToCart = () => {
        addToCart(book);
    };

    return (
        <>
            <Card className="h-100" >
                <Card.Body onClick={onShowModal}>
                    {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    ) : (
                        <div className="d-flex justify-content-center align-items-center h-100">No Picture Available</div>
                    )}
                    <Card.Title className='py-2'>{book.volumeInfo.title}</Card.Title>
                    {price !== null &&                     
                        <Card.Text>Price: {price} {book.saleInfo.listPrice.currencyCode}</Card.Text>
                    }
                </Card.Body>
                <Card.Footer>
                    <Button className='w-100 h-100' variant="light" onClick={onAddToCart}>Add to Cart</Button>
                </Card.Footer>

            </Card>
            <Modal show={showModal} onHide={onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{book.volumeInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Authors:</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
                    <p><strong>Description:</strong> {book.volumeInfo.description ? book.volumeInfo.description : 'No description available'}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookDetail;