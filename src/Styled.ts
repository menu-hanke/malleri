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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: space-around;
`;

export const FlexItem = styled.div`
  flex: none;
  width: 25rem;
`;

export const BoxContainer = styled.div`
  border: 1px solid black;
  padding: 0.2rem;
  margin: 0.1rem;
`;
