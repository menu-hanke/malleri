import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Mukta', sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #78be20;
  font-weight: bold;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Titillium Web', sans-serif;
}

img {
  max-width: 100%;
}

nav {
  width: 100%;
  background: #78be20;
}

nav a {
  color: white;
  padding: 1rem;
  display: inline-block;
}

.content {
  padding: 1rem;
}
`;

export const LibraryTable = styled.table`
  padding: 1rem;
  width: 40%;
`;

export const LibraryTableCell = styled.td`
  padding: 8px;
`;
