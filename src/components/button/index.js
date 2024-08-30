import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = (props) => {
  const { children, kind, name, hasIcon, onClick} = props;

  return (
    <S.ContainerButton kind={kind} hasIcon={hasIcon} onClick={onClick}>
      {children}
      <S.ButtonName>{name}</S.ButtonName>
    </S.ContainerButton>
  );
};

Button.defaultProps = {
  hasIcon: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
