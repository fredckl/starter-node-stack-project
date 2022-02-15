import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RelayEnvironnement from './graphql';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironnement}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

