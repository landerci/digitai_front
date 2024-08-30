import styled, { css } from 'styled-components';
import Form from 'react-bootstrap/Form';

export const Label = styled.label`
  ${({ theme, color }) => css`
    color: ${color === 'black' ? theme.colors.black : theme.colors.darkRed};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const SelectContainer = styled(Form.Select)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.regular};
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.border.radius.medium};
    margin-top: 0.5rem;
    height: 3rem;
    width: 100%;
  `}
`;

export const Option = styled.option``;
