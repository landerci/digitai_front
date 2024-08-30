import React, { useEffect, useState, useContext } from 'react';
import tarefaService from '../../../services/TarefaService'
import Swal from 'sweetalert2';
import * as S from './styles';
import Button from '../../../components/button';
import Input  from '../../../components/input';
import TarefasContext from '../../../context/tarefas'


const CadastrarTarefas = (props) => {

    const [nome, setNome] = useState([])
    const [comentario, setComentario] = useState([])
    const [tempo, setTempo] = useState("")
    const [isSave , setSave] = useState(false)

    const context = useContext(TarefasContext)

    //Tarefas.loadTarefas()
    const save = () => {

        let putData = {
            nome: nome,
            comentario: comentario,
            completa: false,
            recompensa: "",
            tempo: tempo
        }
        
        context.save(putData)
        LimparCampos()
        setSave(true)
    }

    const LimparCampos = () => {
        console.log("limpou os campos")
        setNome("")
        setComentario("")
        setTempo("")
    }
    

 

    return (
        <div className="block-box post-input-tab forum-post-input">
            <div className="media">
                <div className="col-lg-12 form-group">
                    <Input 
                        color='black' 
                        id="txtNome" 
                        placeholder="Qual o nome da tarefa?" 
                        type='text' 
                        label='Nome' 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
            </div>
            <div className='media'>
            <div className="col-lg-12 form-group">
                    <Input 
                    color='black'
                    id="txtComentario" 
                    type='textarea' 
                    placeholder="O que da pra descrever sobre essa tarefa..." 
                    label='Descrição' 
                    value={comentario} 
                    onChange={(e) => setComentario(e.target.value)} />
                </div>
            </div>
            <div className='media'>
            <div className="col-lg-12">
                    <Input 
                        color='black' 
                        id="txtTempo" 
                        placeholder="Quanto tempo você acha que vai demorar para realizar essa tarefa?" 
                        type='text' 
                        label='Tempo' 
                        value={tempo}
                        onChange={(e) => setTempo(e.target.value)} 
                    />
                </div>
            </div>
            <div  className="post-footer">
                <div className="insert-btn">
                    <a href="#"><i className="icofont-image"></i></a>
                    <a href="#"><i className="icofont-clip"></i></a>
                    <a href="#"><i className="icofont-tags"></i></a>
                    <a href="#"><i className="icofont-location-pin"></i></a>
                </div>
                <div className="submit-btn">
                    
                    <a onClick={() => save()}>CADASTRAR</a>
                    {/* <S.ButtonContainer>
                        <Button  name='CADASTRAR' onClick={() => save()} />
                    </S.ButtonContainer> */}
                </div>
            </div>
        </div>
    )

}
export default CadastrarTarefas