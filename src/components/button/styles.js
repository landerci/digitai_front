import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Form';

export const ContainerButton = styled(Button)`
  ${({ theme, kind, hasIcon }) => css`
    color: ${kind === 'primary' ? theme.colors.white : theme.colors.black};
    background-color: ${kind === 'primary' ? theme.colors.orange : theme.colors.lightblue};
    border: 1px solid ${kind === 'primary' ? theme.colors.orange : theme.colors.blue};
    border-radius: ${theme.border.radius.large};
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    padding: ${hasIcon ? '0.8rem' : '1rem'};
    display: ${hasIcon ? 'flex' : 'block'};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const ButtonName = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.bold};
    margin-left: 5px;
  `}
`;
