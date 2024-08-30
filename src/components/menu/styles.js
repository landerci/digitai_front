import styled, { css } from 'styled-components';



export const Menu = styled.nav`	
    ${({ theme }) => css`
    background-color: black;
        display: flex;
        height: 7.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 2px solid rgb(11 8 42);
        gap:10px;
    `}  
`;          

export const NavItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  `}      
`;  

//crie MenuNav
export const MenuNav = styled.div`
display: flex;  
flex-direction: column;
position: relative;
border: 5px solid #006699;
`;
//cria um NavItem

export const NavItemBack = styled.div`
  ${({ theme }) => css`
    padding: 10 10 10 10;
    justify-content: center;        
    text-align: left;
    align-items: left;
    flex: 1;
    top: 100px;
    position: absolute;
    height: 60px;
    flex: 1;
    font-family: ${theme.fonts.family.default};
    font-size:  2em;
    font-weight: ${theme.fonts.weight.regular};
    cursor: pointer;
    &:hover {      
    color: rgb(40,77,255);
    }
    &.active {
      color: ${theme.colors.primary};
    }
  `}  
`;

export const NavItemHome = styled.div`
  ${({ theme }) => css`
    background-color: black;
    color: white;
    justify-content: center;        
    text-align: center;
    align-items: center;
    display: flex;
    top: 100px;
    position: absolute;
    right: 0%;
    height: 60px;
    flex: 1;
    border: 2px solid rgb(11 8 42);
    border-radius: 10px;
    font-family: ${theme.fonts.family.default};
    font-size:  2em;
    font-weight: ${theme.fonts.weight.regular};
    cursor: pointer;
    &:hover {      
    background-color: white;
    color: black;
    }
    &.active {
      color: ${theme.colors.primary};
    } 
  `}  
`;

export const Diagonal = styled.div`
  width: 15%;
  height: 300%;
  position: absolute;
  z-index: -1;
  border: 5px solid black;
  ${({ theme }) => css`
    background-color: black;
    transform: skewY(-45deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  `}
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.blue};
    `}
  }
`;

export const MenuItem = styled.div`
  ${({ theme }) => css`
    color: white;
    z-index: 0;
    padding: 10 10 10 10;
    justify-content: center;        
    text-align: center;
    align-items: center;
    display: flex;
    height: 60px;
    flex: 1;
    border-radius: 10px;
    font-family: ${theme.fonts.family.default};
    font-size:  2em;
    font-weight: ${theme.fonts.weight.regular};
    cursor: pointer;
    
    &:hover ~ ${Diagonal} {
      background-color: green;
    color : rgb(40,77,255); 
    }
    &.visited {
      color: white;
    }

    &.active {
      color: ${theme.colors.primary};
    }
  `}
`;