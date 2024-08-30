import React, { useState } from 'react';
import PropTypes, { any } from 'prop-types';

import * as S from './styles';
import { propTypes } from 'react-bootstrap/esm/Image';

const Input = (props) => {

  const { type, label, color, placeholder, value, textarea, onChange, onKeyPress } = props;

  const [currentValue, setCurrentValue ] = useState([]);

  const change = (e) => {
    setCurrentValue(e.target.value)
    onChange(e)
  }



  return (
    <div>
      <S.Label color={color}>{label}</S.Label>
      <S.InputContainer>
        { textarea && 
          <S.FormControl
            type={type}
            placeholder={placeholder}
            value={value}
            as="textarea"
            rows={5}
            onChange={change}
            onKeyPress={onKeyPress}
          />
        }

        { !textarea &&
        <>
          <S.FormControl
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={change}
            onKeyPress={onKeyPress}
          />
          {/* <>
          {currentValue !== '' &&
          <p>{currentValue}.</p>
           }
           </> */}
        </>
        }
      </S.InputContainer>
    </div>
  );
};



Input.defaultProps = {
  label: '',
  placeholder: '',
  color: '',
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  limparValores: any
};


 export default Input