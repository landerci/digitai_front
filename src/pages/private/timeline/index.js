//crie uma pagina de timeline

import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from '../../private/timeline/style';
import Menu from '../../../components/menu';

const Timeline = () => {

    const navigate = useNavigate();

    return (
        <S.Container>
            <Menu />
            <S.Content>
                <S.Diagonal>
                </S.Diagonal>
                <h1>Timeline</h1>
            </S.Content>
        </S.Container>
    )
}

export default Timeline

