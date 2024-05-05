import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control type="text" placeholder="Search for books..." value={searchTerm} onChange={handleInputChange} />
              </Col>
              <Col xs={3}>
                <Button variant="dark" onClick={handleSearch} className="w-100">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;