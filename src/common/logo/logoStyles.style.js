import styled from 'styled-components';

export const StyledLogo = styled.div`
  
  font-size: 24px;
  font-weight: bold;
  
  font-family: "Mountains of Christmas", cursive;
 
  p {
    font-size: 24px;
  font-weight: bold;
  color: ${p => p.theme.colors.dark};
  font-family: "Mountains of Christmas", cursive;
 
  }

  p span {
    color: ${p => p.theme.colors.actionPrimary};
  font-family: "Mountains of Christmas", cursive;
  }
 
`;