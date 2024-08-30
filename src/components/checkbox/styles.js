import styled, { css } from 'styled-components';
import Form from 'react-bootstrap/Form';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  label {
    ${({ theme }) => css`
      font-family: ${theme.fonts.family.default};
      font-size: ${theme.fonts.sizes.default};
      margin-left: 0.2rem;
    `}
  }
`;

export const Container = styled.div``;

export const Checkbox = styled(Form.Check)`
  
`;
