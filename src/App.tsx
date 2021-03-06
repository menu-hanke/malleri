import React from 'react';
import {Root, Routes, addPrefetchExcludes} from 'react-static';
import {Link, Router} from '@reach/router';
import {GlobalStyle} from './Styled';
import Logo from './components/Logo';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <GlobalStyle />
      <nav>
        <Logo />
        <Link to="/">Homepage</Link>
        <Link to="/library">Library</Link>
        <Link to="/simulator">Mela2.0 software</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
