
//crie um modal com um input do tipo text

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

import Input from '../../components/input';

import Modal from '../../components/modal';
import { Button } from 'react-bootstrap';
import roomService from '../../services/RoomService';

import moment from 'moment';


const Room = () => {
    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();
    const [mensagens, setMensagens] = useState([]);

    const [mensagem, setMensagem] = useState("");
    const [modalVisible, setModalVisible] = useState(true);

    const loadMessages = () => {
        roomService.carregarMensagens().then((res) => setMensagens(res))
    }

    function enviarMensagem() {
        roomService.enviarMensagem(usuario, mensagem).catch((err) => console.log(err))
        setMensagem("");
    }


    useEffect(() => {   
    const interval = setInterval(() => {
        loadMessages()
      }, 5000);
    return () => clearInterval(interval);
    }, []);
 
    return (
        <>
            <S.LayoutPagina>


                <Modal title="DIGITAÍ" show={modalVisible} setShow={() => { }} >
                        <Input type="text" placeholder="COMO VOCÊ SE CHAMA?" value={usuario} onChange={(e) => { setUsuario(e.target.value) }} />

                    <Button style={{ textAlign: 'center', display: 'flex', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} onClick={() => {
                        setModalVisible(false)
                        roomService.CadastrarUsuario(usuario).catch((err) => console.log(err))
                        loadMessages()
                    }}>OK</Button>
                </Modal>
                <S.ListaMensagens style={{overflowY: 'scroll', maxHeight: '70vh'}}>
                    {mensagens.length > 0 && <>
                        {mensagens.map((item) => (
                            <S.Mensagem >
                                <S.UsuarioMensagem>
                                    <S.MensagemHora>
                                        {moment(item.dataCriacao).format('HH:mm:ss')}
                                    </S.MensagemHora>
                                    -
                                    <S.Usuario>

                                        {item?.usuario != null && <>
                                            {item?.usuario[0]?.name}
                                        </>}
                                    </S.Usuario>
                                </S.UsuarioMensagem>
                                -
                                <S.MensagemUsuario>{item.text}</S.MensagemUsuario>
                            </S.Mensagem>
                        ))}

                    </>
                    }
                </S.ListaMensagens>
                <S.PainelMensagem>
                        Digitaí uma mensagem
                        <Input type="textarea" value={mensagem} onChange={(e) => { setMensagem(e.target.value) }} />
                        <Button style={{ textAlign: 'center', display: 'flex', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }} 
                        onClick={() => {
                           enviarMensagem()                
                           loadMessages()
                        }}>ENVIAR</Button>
                </S.PainelMensagem>
            </S.LayoutPagina>
        </>
    )
}

export default Room




