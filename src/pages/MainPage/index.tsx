import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'; // Assuming you're using React Bootstrap for styling

const MainPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h1>Welcome to CultureArtDiary</h1>
          <p>Discover and share your cultural and artistic experiences.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 4, offset: 4 }} className="text-center">
          <Button href="/diarycreation" variant="primary" size="sm">
            Create Your Diary Entry
          </Button>
        </Col>
      </Row>
      {/* Additional sections for featured diary entries or upcoming events could be added here */}
    </Container>
  );
};

export default MainPage;