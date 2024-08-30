import React, { useEffect, useState } from 'react';
import pessoaService from '../../../services/PessoaService'
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../../../components/modal';
import * as S from '../pessoas/styles';
import { FaAngry, FaRegSmile, FaStar } from 'react-icons/fa';

const PerfilPessoa = () => {

  const [pessoa, setPessoa] = useState([])
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const location = useLocation()
  const [id, setId] = useState(location.state?.id) //id do chamado
  const [mouseOver, setMouseOver] = useState(false);
  const [formData, setFormData] = useState({})
  const [gosto, setGosto] = useState("");
  const [fotoPerfil , setFotoPerfil] = useState();
  const [foto, setFotoGosto] = useState();
  const [listaGostos, setListaGostos] = useState([])
  const [indiceLista, setIndiceLista] = useState();

  const [currentGosto, setCurrentGosto] = useState();


  const loadPessoa = () => {


    console.log("carregando os dados da pessoa", id)
    pessoaService.getPessoa(id).then((response) => {
      let pessoa = response.data
      console.log("olha o perfil da pesssoa", pessoa)

      setPessoa(pessoa);
    }).catch((error) => {
      alert("Não foi possível carregar o perfil da pessoa")
    })
    pessoaService.getGostos(id).then((response) => {
      
      let gostos = response.data
      console.log("olha os gostos da pesssoa", gostos)
      setListaGostos(gostos);
      
      setCurrentGosto(gostos[0]);
      setIndiceLista(1);
      

    }).catch((error) => {
      alert("Não foi possível carregar o perfil da pessoa")
    })
  }
  useEffect(() => {
    loadPessoa()
  }, [])

  const switchGosto = () => {
    if(indiceLista >= listaGostos.length){
      setCurrentGosto(listaGostos[0])
      setIndiceLista(1)
    }else{ 
      setIndiceLista(indiceLista + 1)
      console.log("esse é o indice lista" , indiceLista)
      setCurrentGosto(listaGostos[indiceLista])
    }      
  };

  const CadastrarFoto = () => {
    if (formData) {
      console.log("esse é o formData com foto", formData)    
      let data = {
        id: id,
        foto: formData["foto"]
      }
      pessoaService.uploadImage(data).then((response) => {
        //alert(response)
        setFotoPerfil("");
      }).catch((error) => {
        alert("Não foi possível salvar a foto")
      })
    }
  }
  const CadastrarGosto = () => {
    if (formData) {
      console.log("esse é o formData", formData)
      let data = {
        id: id,
        nome: formData["gosto"],
        foto: formData["foto"]
      }
      
      pessoaService.cadastrarGostos(data).then((response) => {
        //alert(response)
        setGosto("")
        setFotoGosto("");


      }).catch((error) => {
        alert("Não foi possível carregar o perfil da pessoa")
      })

    }
  }


  const changeField = (field, value) => {
    let data = formData
    data[field] = value
    setFormData(data)
    console.log(data)
  }
  const openModalGosto = () => {
    setShow(true)
    pessoaService.getGostos(id).then((response) => {
      let gostos = response.data
      console.log("olha os gostos da pesssoa", gostos)

      setListaGostos(gostos);
    }).catch((error) => {
      alert("Não foi possível carregar o perfil da pessoa")
    })
  }

  return (
    <>
      <a href='http://localhost:3040/pessoas'> Voltar </a>
      <div className="widget widget-memebers">
        <div className="widget-heading">
          <h3 className="widget-title">Lista de Pessoas</h3>
        </div>
        <S.colunasPessoa key={pessoa.id}>
          <S.rotuloNome key={pessoa.id} onClick={""}>
            <a href="#" key={pessoa.id}>{pessoa.nome}</a>
          </S.rotuloNome>

          <S.rotuloApelido>
            {pessoa.apelido}
          </S.rotuloApelido>
          <S.rotuloDados>
            {pessoa.dados}
          </S.rotuloDados>
          <div>
            <input type="file" onChange={(e) => {
              setFotoPerfil(e.target.files[0])
            }} />


          </div>
          <div>
            <button onClick={() => {
              if (fotoPerfil) {
                pessoaService.uploadImage(pessoa.id, fotoPerfil).then((response) => {
                  alert("Foto enviada com sucesso!")
                  loadPessoa()
                }).catch((error) => {
                  alert("Erro ao enviar a foto")
                })
              }
            }}>Upload da foto</button>
          </div>
        </S.colunasPessoa>
        <br></br>
        <br></br>
        <div>                Gostos / Desgostos / Favoritos</div>
        <S.blocosPreferencia>

          <S.IconHappy onClick={openModalGosto}>GOSTOS<FaRegSmile></FaRegSmile></S.IconHappy>

          <Modal title='Essa pessoa gosta de algumas coisas...' show={show} setShow={setShow}>
            <S.blocosGostos >

  
              <S.listaGostos>

                {currentGosto != null && currentGosto != undefined &&
                  <S.rotuloGosto>
  
                  <label>{currentGosto.nome}</label>
                  </S.rotuloGosto>
                }

                {currentGosto != null && currentGosto != undefined &&
                  <S.imagemGosto  >
                    <img src={currentGosto.foto} alt="foto do que a pessoa gosta"/> 
                  </S.imagemGosto>
                }
              </S.listaGostos>
              <button onClick={switchGosto}> Vai  </button>
              <S.acoesGosto>
                <S.blocosAcoesGostos>
                  <S.inputRotuloTitleGosto>
                    Do que essa pessoa gosta?
                  </S.inputRotuloTitleGosto>
                  <S.inputsGostos>
                    <input type='text' placeholder='Adicionar um novo gosto' value={gosto} onChange={(e) => {
                      changeField("gosto", e.target.value)
                      setGosto(e.target.value)
                    }} />
                  </S.inputsGostos>
                  <S.inputsGostos>
                    <input type='text' placeholder='Uma foto do que a pessoa gosta' value={foto} onChange={(e) => {
                      changeField("foto", e.target.value)
                      setFotoGosto(e.target.value)
                    }} />
                  </S.inputsGostos>
                  <S.buttonCadastrarGosto onClick={CadastrarGosto}>
                    CADASTRAR
                  </S.buttonCadastrarGosto>
                </S.blocosAcoesGostos>
              </S.acoesGosto>
            </S.blocosGostos>

          </Modal>
          <S.IconAngry>DESGOSTOS<FaAngry></FaAngry></S.IconAngry>

          <S.IconFavorite>FAVORITOS<FaStar></FaStar></S.IconFavorite>

        </S.blocosPreferencia>
      </div>
    </>
  );
};

export default PerfilPessoa;
