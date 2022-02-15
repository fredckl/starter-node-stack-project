import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RelayEnvironnement from './graphql';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironnement}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

