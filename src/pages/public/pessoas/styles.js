import styled, { css } from 'styled-components';

 
export const blocosPessoa = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color: white;
  border: 5px solid black;
  flex-direction: row;
  width:100%;
  gap: 10px
`

export const LayoutPagina = styled.div`
  font-family: Roboto Condensed, sans-serif;
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
export const InformacoesPessoa = styled.div`
  margin: 10px 10px 10px 10px;
  display: flex;
  flex:1;
  align-items: center;
  flex-direction: column;
  height: 400px;
`
export const imagemPessoa = styled.img`
  src: url(${props => props.src});
  display: flex;
  flex:1;
  height: 400px;
  max-width: 30%;
  object-fit: cover;
  border: 5px solid lightgray;
`

export const TitlePessoas = styled.div`
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
export const ContainerPessoas = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  border: 5px solid #006699;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  flex-direction: column;
`


export const ListPessoas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  flex-direction: row;
  width:100%;
  gap: 10px
`


export const colunasPessoa = styled.div`
  display: flex;
  background-color: lightgray;
  flex-direction: column;
  width:100%;
  gap: 10px
`
export const blocosPreferencia = styled.div`
  display:flex;
  flex-direction:row
  width:100%
  heigth:50px;
  background-color: white;
  gap:10px
`
export const rotuloDados = styled.div`
  flex:1;
  margin:5px 5px 5px 5px;
  text-align:center;
  width:100%;
  max-height:110px;
  padding:10px 10px 10px 10px;
  border: 1px solid black;
  background-color: #41A8F9;
  color: black;
`
export const IconHappy = styled.i`
 padding-bottom:10px;
 font-size:55px;
 text-align:center;
 justify-content: center;
 flex:1;
 background-color:lightgreen;
`
export const IconAngry = styled.i`
 font-size:55px;
 text-align:center;
 flex:1;
 background-color:red;
`
export const blocosGostos = styled.div`
display:flex;
flex-direction:row;
`
export const blocosAcoesGostos = styled.div`
display:flex;
flex-direction:column;
`
export const inputRotuloTitleGosto = styled.div`
flex:1;
width:100%;
text-align:center;
border: 1px solid black;
background-color:lightgreen;
heigth:10px;
`
export const listaGostos = styled.div`
display:flex;
flex-direction:column;
flex:1;
border: 1px solid black;
align-items:center;
`

export const inputsGostos = styled.div`
flex:1;
margin-top: 10px;
margin-left:10px;
border: solid black 1px;
`

export const buttonCadastrarGosto = styled.div`
flex:1;
margin-top:50px;
align-items:center;
jutify-content:center;
border: 1px solid black;
text-align:center;
background-color: darkgreen;
color: white;
cursor:pointer;
:hover {
  background-color:lightgreen;
}
`
export const rotuloGosto = styled.div`
flex:1;
width:100%;
text-align:center;
border: 1px solid black;
background-color:lightblue;
heigth:10px;
`
export const imagemGosto = styled.div`
flex:1;

`
export const acoesGosto = styled.div`
flex:1;
`
export const IconFavorite = styled.i`
 font-size:55px;
 text-align:center;
 flex:1;
 background-color:gold;
`
export const rotuloNome = styled.div`
  font-weight:bold;
  font-size:2em;
  width:100%;
  max-height:50px;
  flex:1;
  align-items:center;
  text-align:center;
  justify-content:center;
  background-color: lightgreen;
  color: black;
  border-radius: 15px 15px 0px 0px;
`
export const rotuloApelido = styled.div`
  border-radius: 0px 0px 15px 15px;
  max-height:40px;
  flex:1;
  text-align:center;
  width:100%;
  font-weight:bold;
  font-size:1.5em;
  background-color: #E0AA00;
  color: black;
`

export const ContainerLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.border.radius.medium};
    position: absolute;
    top: 30%;
    padding: 1.5rem;
    width: 35rem;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.family.default};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.bold};
    margin-bottom: 1rem;
    text-align: center;
  `}
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ImgAmbulance = styled.img`
  width: 75rem;
  height: 40rem;
  text-align: right;
`;
