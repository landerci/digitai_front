//crie um arquivo de estilos para o grupos

import styled, { css } from 'styled-components';

export const LayoutPagina = styled.div`
  background-color: black;
  position: absolute;
  z-index: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
`

export const TitleGrupos = styled.div`
${({ theme }) => css` 
  width: 100%;
  marging-top: 10px;
  max-width: 400px;
  background-color: #006699;
  border-radius: 10px 10px 10px 10px;
  color: white;
  font-family: ${theme.fonts.family.default};
  font-size: ${theme.fonts.sizes.medium};
  font-weight: ${theme.fonts.weight.bold};
  text-align: center;
`}  
`
export const ContainerGrupos = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  border: 5px solid #006699;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  flex-direction: column;
`
