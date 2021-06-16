import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
    'Lucida Grande', sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #108db8;
  font-weight: bold;
}

img {
  max-width: 100%;
}

nav {
  width: 100%;
  background: #108db8;
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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FlexItem = styled.div`
  flex: none;
  margin: 5px;
  width: 250px;
`;

export const BoxContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;
