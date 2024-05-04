import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Cart = ({ show, handleClose, selectedBooks, }) => {

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        let currencyCode = '';
        if (selectedBooks && selectedBooks.length > 0) {
            selectedBooks.forEach(book => {
                totalPrice += book.saleInfo.listPrice.amount;
                currencyCode = book.saleInfo.listPrice.currencyCode;
            });
        }
        return `${totalPrice.toFixed(2)} ${currencyCode}`;
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {selectedBooks && selectedBooks.length > 0 ? (
                    <Container>
                        <Row>
                            {selectedBooks.map((book, index) => (
                                <Col key={index} xs={12} className='my-3'>
                                    <p>{book.volumeInfo.title} - {book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode} </p>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col>
                                <p>Total Price: {calculateTotalPrice()}</p>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <p>No books selected.</p>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;