//crie um tela para eventos onde os atributos do evento são : nome e localizacao

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '../../../components/menu';
import * as S from '../eventos/styles';
import eventoService from '../../../services/EventoService';

export default function Eventos() {
    const navigate = useNavigate();

    const [eventos, setEventos] = useState([]);

    const loadEventos = () => {

           eventoService.getEventos().then((response) => {
                console.log("esse é o data evento" , response.data)
                setEventos(response.data);
            }).catch((error) => {
                alert("Não foi possível carregar os eventos");

            })

    }


    useEffect(() => {
        loadEventos()
    }, []);


    return (
        <>
            <Menu>
            </Menu>
            <S.LayoutPagina>
                <S.TitleEventos>EVENTOS</S.TitleEventos>
                <S.ContainerEventos>
                   <S.ListaEventos>
                       {eventos.map(evento => (
                           <S.Evento onClick={() => navigate('/eventos/' + evento.id)}>
                               {/* <S.Imagem src={evento.fotos[0].url} alt={evento.fotos[0].legenda} /> */}
                               <S.Descricao>    
                                   <S.Titulo>{evento.nome}</S.Titulo>
                                   <S.Localizacao>{evento.localizacao}</S.Localizacao>
                               </S.Descricao>
                           </S.Evento>
                       ))}
                   </S.ListaEventos>
                </S.ContainerEventos>
            </S.LayoutPagina>

        </>
    )
}

