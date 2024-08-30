import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Checkbox = (props) => {
  const { data, name, onChange, value } = props;

  const [currentValue, setCurrentValue] = useState((props.value) ? props.value : [])

  const change = (e) => {
    let current = [...currentValue]
    if (e.target.checked){      
      current.push(e.target.value)      
    }else{
      current = current.filter((item) => item != e.target.value)
    }
    console.log("current", current)
    setCurrentValue(current)
    onChange(e)
  }

  return (
    <S.FormContainer>
      {data.map((item) => (
        <S.Container key={item.label}>
          <S.Checkbox
            disabled={item.isDisabled ? item.isDisabled : false}
            type={item.type}
            id={item.id}
            label={item.label}
            value={item.value}
            name={name}
            style={{
              color: item.color ? item.color : 'black',
              fontWeight: item.color ? 'bold' : 'normal'              
            }}
            onChange={change}
            checked={ (currentValue.find((value) => value == item.value) != null) }
          />
        </S.Container>
      ))}
    </S.FormContainer>
  );
};

Checkbox.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Checkbox;
