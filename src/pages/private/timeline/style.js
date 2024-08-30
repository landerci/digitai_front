//crie um arquivo de estilos para o timeline    

import styled, { css } from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const Container = styled.div`
position: relative;

`

export const ContainerModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`   
//faca uma div diagonal

export const Diagonal = styled.div`
  width: 5%;
  height: 100%;
  position: absolute;
  ${({ theme }) => css`
    background-color: ${theme.colors.orange};
    transform: skewY(-45deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  `}
  :hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.blue};
    `}
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

