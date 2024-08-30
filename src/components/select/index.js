import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Select = (props) => {
  const { data, label, color, onChange, propValue = null, propLabel = null, value = null } = props;

  console.log(value)

  return (
    <>
      {label !== '' && <S.Label color={color}>{label}</S.Label>}
      <S.SelectContainer onChange={onChange}>
        <S.Option value="">-- SELECIONE --</S.Option>
        {data?.map((item) =>
          <>
          { (propValue != null && propLabel != null) && 
            <>
              {item[propValue] == value && 
                <S.Option value={item[propValue]} selected={true}>{item[propLabel]}</S.Option>
              }
              {item[propValue] != value && 
                <S.Option value={item[propValue]}>{item[propLabel]}</S.Option>
              }
            </>
          }
          { (propValue == null) && 
            <>
              { item.value == value && 
                <S.Option value={item.value} selected={true}>{item.name}</S.Option>
              }
              { item.value != value && 
                <S.Option value={item.value}>{item.name}</S.Option>
              }
            </>
          }
          </>
        )}
      </S.SelectContainer>
    </>
  );
};

Select.defaultProps = {
  label: '',
  color: '',
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default Select;
