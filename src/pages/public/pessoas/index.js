import React, { useEffect, useState } from 'react';
import pessoaService from '../../../services/PessoaService'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as S from '../pessoas/styles';
import Menu from '../../../components/menu';
import { Button } from 'react-bootstrap';

const Pessoas = () => {

  const [pessoas, setPessoas] = useState([])
  const navigate = useNavigate();
  const loadPessoas = () => {
    pessoaService.getAll().then((response) => {
      let data = response.data
      data = data.map((pessoa) => {

        return {
          id: pessoa.id,
          nome:pessoa.nome.toUpperCase(),
          apelido: pessoa.apelido.toUpperCase(),
          dados: pessoa.dados,
          foto: pessoa.foto
        }
      })

      setPessoas(data);
    }).catch((error) => {
      alert("Não foi possível listar as pessoas")
    })
  }
  useEffect(() => {
    loadPessoas()
  }, [])

  const openPessoa = (id) => {
    navigate("/perfil_pessoa", {
      state:{
        action:"READ",
        id:id
      }
    })

  }

  return (
    <>
    <Menu>
    </Menu>
    <S.LayoutPagina> 

      <S.TitlePessoas>
          PESSOAS
      </S.TitlePessoas>

      <S.ContainerPessoas>
      <S.ListPessoas>
      
    
        {(pessoas.length > 0) &&
          <>
            {pessoas.map((pessoa) => (
              <S.blocosPessoa key={pessoa.id}>
                <S.imagemPessoa src={pessoa.foto} />
                <S.InformacoesPessoa>
                  <S.rotuloNome key={pessoa.id} onClick={(e) => { openPessoa(pessoa.id) }}>
                      {pessoa.nome }
                  </S.rotuloNome>
                  <S.rotuloApelido>
                    {pessoa.apelido}
                  </S.rotuloApelido>
                  <S.rotuloDados>
                    {pessoa.dados}
                  </S.rotuloDados>
                  
                  <Button onClick={(e) => { openPessoa(pessoa.id) }}>Ver Perfil</Button>
   
                </S.InformacoesPessoa>

              </S.blocosPessoa>
            ))}
          </>
        }
    
        </S.ListPessoas>
        </S.ContainerPessoas>
      </S.LayoutPagina>
    </>
  );
};

export default Pessoas;
