
import styled, { css } from 'styled-components';

export const ListaMensagens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px
`
export const Mensagem = styled.div`
    position: relative;
    padding: 5px 5px 5px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    gap: 10px
`
export const UsuarioMensagem = styled.div`
    position: relative;
    padding: 5px 5px 5px 5px;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: left;
    background-color: lightgreen;
    color: white;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.75);
    border-radius: 10px;
    width: 10%;
    gap: 10px
`
export const MensagemUsuario = styled.div`
    display: flex;
    border-radius: 10px;
    background-color: #006699;
    flex:1 ;
    height: 100%;
    color:white;
    padding: 5px 5px 5px 5px;
`
export const MensagemHora = styled.div`
    display: flex;
    color: black;
    border-radius: 10px;
    color:white;
`
export const Usuario = styled.div`
    display: flex;
    color: black;
    border-radius: 10px;
    gap: 10px ;
    color:white;
`
export const LayoutPagina = styled.div`
    position: relative;
    font-family: Roboto Condensed, sans-serif;
    background-color: white;
    position: absolute;
    z-index: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const PainelMensagem = styled.div`
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 30%;
    gap: 10px;
    border: 5px solid #006699;
    border-radius: 10px;
    background-color: white;
    padding: 10px 10px 10px 10px;
    bottom: 10px;
`
