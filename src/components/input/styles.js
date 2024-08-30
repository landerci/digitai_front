import styled, { css } from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Label = styled.label`
  ${({ theme, color }) => css`
    color: ${color === 'black' ? theme.colors.black : theme.colors.darkRed};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.bold};
    margin-right: 0.5rem;
  `}
`;

export const InputContainer = styled(InputGroup)`
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
`;

export const FormControl = styled(Form.Control)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.default};
    font-weight: ${theme.fonts.weight.regular};
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.border.radius.medium};
    min-height: 3rem;
    width: 100%;
    padding-left: 0.2rem;
  `}
`;
