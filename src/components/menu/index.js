import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { FaBackward, FaChevronCircleLeft, FaHome } from 'react-icons/fa'



const mouseOver = (data) => {
    if(data)
    document.getElementById(data).style.backgroundColor = '#006699';
}
const mouseLeavePessoa = (data) => {
    if(data)
    document.getElementById(data).style.backgroundColor = 'black';
}

const Menu = () => (
    <S.MenuNav>
        <S.Menu>
            <S.MenuItem onMouseOver={() => mouseOver('div1')} onMouseLeave={() => mouseLeavePessoa('div1')} >
                <S.Diagonal id="div1">
                </S.Diagonal>
                <Link to="/pessoas">PESSOAS</Link>
            </S.MenuItem>
            <S.MenuItem onMouseOver={() => mouseOver('div2')} onMouseLeave={() => mouseLeavePessoa('div2')} >
                <S.Diagonal id="div2">
                </S.Diagonal>
                <Link to="/grupos">GRUPOS</Link>
            </S.MenuItem>
            <S.MenuItem onMouseOver={() => mouseOver('div3')} onMouseLeave={() => mouseLeavePessoa('div3')} >
                <S.Diagonal id="div3">
                </S.Diagonal>
                <Link to="/eventos">EVENTOS</Link>
            </S.MenuItem>
            <S.MenuItem onMouseOver={() => mouseOver('div4')} onMouseLeave={() => mouseLeavePessoa('div4')} >
                <S.Diagonal id="div4">
                </S.Diagonal>
                <Link to="/tarefas">TAREFAS</Link>
            </S.MenuItem>
            <S.MenuItem onMouseOver={() => mouseOver('div5')} onMouseLeave={() => mouseLeavePessoa('div5')} >
                <S.Diagonal id="div5">
                </S.Diagonal>
                <Link to="/calendario">CALENDÁRIO</Link>
            </S.MenuItem>

        </S.Menu>
        <S.NavItems>
            <S.NavItemBack>
                <FaChevronCircleLeft></FaChevronCircleLeft>
            </S.NavItemBack>

            <S.NavItemHome>
                <Link to="/timeline">LINHA DO TEMPO</Link>
            </S.NavItemHome>
        </S.NavItems>
    </S.MenuNav>

)

export default Menu
