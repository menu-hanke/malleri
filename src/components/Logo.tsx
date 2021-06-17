import React, {useState} from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    width: 10%;
    aspect-ratio: 1/1;
    background: white;
    position: absolute;
    left: 88%;
    padding: 1rem 0.25rem 1.5rem 0.25rem;
    box-shadow: 0 0 8px 0 rgba(32,30,23,.2);
    @media only screen and (max-width: 400px) {
          display: none;
      }
`;

export default () => {
    return (
        <LogoContainer>
            <img src="images/menu-logo.svg" alt="Menu-logo"></img>
        </LogoContainer>
      );
  };
  