import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Modal = (props) => {
  const { title, show, setShow, children } = props;

  return (
    <S.ModalContainer
      {...props}
      size="lg"
      centered
    >
      <S.ModalHeader  onClick={() => setShow(!show)} closeButton>
        <S.Title>
          {title}
        </S.Title>
      </S.ModalHeader>
      <S.ModalBody>
        {children}
      </S.ModalBody>
    </S.ModalContainer>
  );
};

Modal.defaultProps = {
  hasIcon: false,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
};

export default Modal;
