import { Button, Container } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

const App = () => {
  return (
    <Container>
      <Routes>
        <nav>
          <Link to="/">
            <Button m={2}>Home</Button>
          </Link>
          <Link to="/posts">
            <Button m={2}>Posts</Button>
          </Link>

        </nav>
      </Routes>
    </Container>
  );
};

export default App;
