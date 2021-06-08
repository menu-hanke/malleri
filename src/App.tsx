import React from 'react';
import {Root, Routes, addPrefetchExcludes} from 'react-static';
import {Link, Router} from '@reach/router';
import {GlobalStyle} from './Styled';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <GlobalStyle />
      <nav>
        <Link to="/">Etusivu</Link>
        <Link to="/library">Mallifunktiokirjasto</Link>
        <Link to="/simulator">Simulaattori</Link>
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
