import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem 2rem 4rem;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  span {
    ${({ theme }) => css`
      margin: 0.5rem;
      font-family: ${theme.fonts.family.default};
      font-size: ${theme.fonts.sizes.small};
      font-weight: ${theme.fonts.weight.bold};
    `}
  }
`;

export const UserInformation = styled.div`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
  display: flex;
`;

export const NewCall = styled.div`
  width: 15rem;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.bold};
    text-decoration: underline;
    margin-bottom: 0.5rem;
  `}
`;

export const TitleTarefas = styled.div`
  ${({ theme }) => css` 
    width: 100%;
    marging-top: 10px;
    max-width: 400px;
    background-color: #006699;
    border-radius: 10px 10px 10px 10px;
    color: white;
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.bold};
    text-align: center;
  `}  
`
export const ContainerTarefas = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  border: 5px solid #006699;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  flex-direction: column;
`


export const LayoutPagina = styled.div`
  background-color: black;
  position: absolute;
  z-index: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 5rem;
`;

export const Text = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.bold};
    margin-right: 0.5rem;
  `}
`;


export const ButtonContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
