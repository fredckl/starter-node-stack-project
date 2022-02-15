import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/posts/Posts';

const Routes = ({children}) => {
  return (
    <Router>
      {children}

      <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={<Posts />}/>

        </Switch>
      </React.Suspense>

    </Router>
  );
};

export default Routes;