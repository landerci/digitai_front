import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Card = (props) => {
  const { data } = props;

  return (
    <S.Container>
      {data.map((item) => (
        <S.ContainerCard key={item.city}>
          <S.CardHeader>
            <S.Text>
              BASE DESCENTRALIZADA DE {item.city}
            </S.Text>
          </S.CardHeader>
          <S.Text>{item.name}</S.Text>
        </S.ContainerCard>
      ))}
    </S.Container>
  );
};

Card.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Card;
