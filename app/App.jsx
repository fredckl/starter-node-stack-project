import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </Routes>
    </div>
  );
};

export default App;
