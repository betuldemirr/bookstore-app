import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
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
            <Offcanvas.Title className='border-bottom w-100 pb-2'>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {selectedBooks && selectedBooks.length > 0 ? (
                    <Container>
                        <Row>
                            {selectedBooks.map((book, index) => (
                                <Col key={index} xs={12} className='py-3 border-bottom'>
                                    <Row>
                                        <Col xs={4}>
                                            <Image src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className='w-100' />
                                        </Col>
                                        <Col xs={8}>
                                            <div>{book.volumeInfo.title}</div>
                                            <div> {book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode} </div>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col>
                                <div className='border-bottom py-2 d-flex justify-content-between'>
                                    <span>Total Price: </span>
                                    <span>{calculateTotalPrice()}</span>
                                </div>
                                <Button className='w-100 my-2' variant="dark">Confirm</Button>
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