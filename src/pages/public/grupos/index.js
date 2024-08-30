//crie uma tela de grupos

import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import Menu from '../../../components/menu';

export default function Grupos() {

    const navigate = useNavigate();

    return (
        <>
            <Menu>
            </Menu>
            <S.LayoutPagina>
                <S.TitleGrupos>GRUPOS</S.TitleGrupos>
                <S.ContainerGrupos>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
                </S.ContainerGrupos>
            </S.LayoutPagina>

        </>
    )
}