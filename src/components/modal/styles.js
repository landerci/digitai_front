import styled, { css } from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const ModalContainer = styled(Modal)``;

export const ModalHeader = styled(Modal.Header)`
`;

export const Title = styled.h6`
  ${({ theme }) => css`
    color: ${theme.colors.darkRed};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const ModalBody = styled(Modal.Body)``;
